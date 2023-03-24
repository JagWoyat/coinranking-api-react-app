import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { deleteFavorite } from "../../features/favoritesSlice";
import dynamicRound from "../../helperFunctions/dynamicRound";
import { useAppDispatch } from "../../helperFunctions/hooks";
import { isPriceIncreasing } from "../../helperFunctions/isPriceIncreasing";
import { Wrapper, JustDiv, TitleDiv, PriceDiv, ButtonWraper } from "./styles";

type FavoriteProps = {
  crypto: any;
  setRender: (bol: boolean) => void;
  custom: boolean;
};

export default function FavoriteCrypto({
  crypto,
  setRender,
  custom = false,
}: FavoriteProps) {
  const dispatch = useAppDispatch();
  return (
    <>
      <Wrapper color={crypto.color}>
        <JustDiv
          as={Link}
          to={`/details/${
            crypto.uuid === undefined ? "custom" + crypto.name : crypto.uuid
          }`}
        >
          {custom && <h5>Custom</h5>}
          <h4>Rank: {crypto.rank}</h4>
          <TitleDiv>
            <img src={crypto.iconUrl} />
            <h1>{crypto.name}</h1>
            <h3>{crypto.symbol}</h3>
          </TitleDiv>
          <PriceDiv price={isPriceIncreasing(crypto.change)}>
            <h3>Price: {dynamicRound(crypto.price, 6)}$</h3>
            {custom ? (
              <h3>{crypto.change}</h3>
            ) : (
              <h3>Daily change: {crypto.change}%</h3>
            )}
          </PriceDiv>
        </JustDiv>
        <ButtonWraper>
          <button
            onClick={(e) => {
              setRender(true);
              dispatch(
                deleteFavorite({
                  custom: custom ? true : false,
                  value: custom ? crypto : crypto.uuid,
                })
              );
            }}
            className="Remove"
          >
            Remove
          </button>
        </ButtonWraper>
      </Wrapper>
    </>
  );
}
