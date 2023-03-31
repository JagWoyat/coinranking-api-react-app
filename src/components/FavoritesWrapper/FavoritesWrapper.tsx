import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  changeLoadingToIdle,
  fetchFavoriteCoins,
  getCoins,
  getCustom,
  getError,
  getIds,
  getLoading,
} from "../../features/favoritesSlice";
import { useAppDispatch, useAppSelector } from "../../helperFunctions/hooks";
import { Wrapper } from "./styles";
import FavoriteCrypto from "../FavoriteCrypto/FavoriteCrypto";

export default function FavoritesWrapper() {
  const ids = useAppSelector(getIds);
  const favorites = useAppSelector(getCoins);
  const custom = useAppSelector(getCustom);
  const loading = useAppSelector(getLoading);
  const error = useAppSelector(getError);
  const dispatch = useAppDispatch();
  const [isRender, setIsRender] = useState(true);

  useEffect(() => {
    if (isRender) return setIsRender(false);
    dispatch(changeLoadingToIdle("idle"));
    if (ids.length != 0) dispatch(fetchFavoriteCoins(ids));
  }, [isRender]);

  return (
    <>
      {loading === "pending" && (
        <>
          <h1>loading...</h1>
        </>
      )}
      {loading === "failed" && (
        <>
          <h1>{error}</h1>
        </>
      )}
      <Wrapper>
        {loading === "succeeded" &&
          favorites.map((crypto: any) => (
            <FavoriteCrypto
              crypto={crypto}
              setRender={setIsRender}
              custom={false}
              key={crypto.uuid}
            />
          ))}
        {custom.map((crypto: object | undefined, key: number) => (
          <FavoriteCrypto
            crypto={crypto}
            setRender={setIsRender}
            custom={true}
            key={key}
          />
        ))}
      </Wrapper>
    </>
  );
}
