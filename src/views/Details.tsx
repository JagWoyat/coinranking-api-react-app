import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailedCrypto from "../components/DetailedCrypto/DetailedCrypto";
import Navbar from "../components/Navbar/Navbar";
import {
  fetchCoinByName,
  getCoin,
  getSLoading,
  addCoin,
  getError,
} from "../features/favoritesSlice";
import { useAppDispatch, useAppSelector } from "../helperFunctions/hooks";

export default function Details() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const coin = useAppSelector(getCoin);
  const loading = useAppSelector(getSLoading);
  const error = useAppSelector(getError);
  const [isRender, setIsRender] = useState(true);

  useEffect(() => {
    if (isRender) return setIsRender(false);
    if (params.uuid?.substring(0, 6) === "custom")
      dispatch(addCoin(params.uuid));
    else dispatch(fetchCoinByName(params.uuid));
  }, [isRender]);

  return (
    <div>
      <Navbar />
      <div>
        {coin.length != 0 && <DetailedCrypto {...coin} />}
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
      </div>
    </div>
  );
}
