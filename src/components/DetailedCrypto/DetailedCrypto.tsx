import React, { useEffect, useState } from "react";
import {
  addCustom,
  addId,
  deleteFavorite,
  getIds,
} from "../../features/favoritesSlice";
import { checkIds } from "../../helperFunctions/checkIds";
import dynamicRound from "../../helperFunctions/dynamicRound";
import { formatMarketCap } from "../../helperFunctions/formatMarketCap";
import { useAppDispatch, useAppSelector } from "../../helperFunctions/hooks";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import { ButtonWraper, NameWrapper, PriceDiv, Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { isPriceIncreasing } from "../../helperFunctions/isPriceIncreasing";

export default function DetailedCrypto(crypto: any) {
  const favs = useAppSelector(getIds);
  const dispatch = useAppDispatch();
  const [availible, setAvailible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [isRender, setIsRender] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (crypto.uuid === undefined) setAvailible(false);
    else setAvailible(checkIds(crypto.uuid, favs));
  });

  return (
    <>
      <Wrapper>
        <img src={crypto.iconUrl} />
        <h4>Rank #{crypto.rank}</h4>
        <NameWrapper>
          <h1>{crypto.name}</h1>
          <h3>{crypto.symbol}</h3>
        </NameWrapper>
        <PriceDiv price={isPriceIncreasing(crypto.change)}>
          <h3>Price: {dynamicRound(crypto.price, 6)}$</h3>
          {crypto.uuid === undefined ? (
            <h3>{crypto.change}</h3>
          ) : (
            <h3>Daily change: {crypto.change}%</h3>
          )}
        </PriceDiv>
        <h3>Market Cap: {formatMarketCap(crypto.marketCap)}$</h3>
        <a href={crypto.websiteUrl}>{crypto.websiteUrl}</a>
        <p>{crypto.description}</p>
        <ButtonWraper availible={availible}>
          <button
            onClick={(e) => {
              if (availible) {
                dispatch(addId(crypto.uuid));
                setIsRender(true);
              }
            }}
            className="Add"
          >
            Add to favorites
          </button>
          <button
            onClick={(e) => {
              setModalOpen(true);
            }}
            className="Edit"
          >
            Edit
          </button>
        </ButtonWraper>
      </Wrapper>
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false);
          }}
        >
          <Form
            onSubmit={(model) => {
              if (crypto.uuid != undefined) {
                dispatch(
                  deleteFavorite({
                    custom: false,
                    value: crypto.uuid,
                  })
                );
                dispatch(addCustom(model));
              } else {
                dispatch(
                  deleteFavorite({
                    custom: true,
                    value: crypto,
                  })
                );
                dispatch(addCustom(model));
              }
              navigate("/");
            }}
          />
        </Modal>
      )}
    </>
  );
}
