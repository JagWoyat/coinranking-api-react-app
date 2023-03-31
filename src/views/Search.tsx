import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import {
  changeLoadingToIdle,
  fetchCoins,
  getCrypto,
  getCryptoError,
  getCryptoLoading,
} from "../features/cryptocurrencySlice";
import ListItem from "../components/Listitem/ListItem";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../helperFunctions/hooks";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 80%;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  border-collapse: collapse;
  box-sizing: content-box;
`;

export default function Search() {
  const [stat, setStat] = useState("");
  const favorites = useAppSelector(getCrypto);
  const loading = useAppSelector(getCryptoLoading);
  const error = useAppSelector(getCryptoError);
  const dispatch = useAppDispatch();
  const [isRender, setIsRender] = useState(true);

  useEffect(() => {
    if (isRender) return setIsRender(false);
    dispatch(changeLoadingToIdle("idle"));
    dispatch(fetchCoins());
  }, [isRender]);

  return (
    <Wrap>
      <Navbar />
      {loading === "succeeded" && (
        <Wrapper>
          {favorites.map((crypto: any, key: number) => (
            <ListItem {...crypto} key={key} />
          ))}
        </Wrapper>
      )}
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
    </Wrap>
  );
}
