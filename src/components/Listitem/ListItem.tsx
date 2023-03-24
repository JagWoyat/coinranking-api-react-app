import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import dynamicRound from "../../helperFunctions/dynamicRound";
import { formatMarketCap } from "../../helperFunctions/formatMarketCap";
import { isPriceIncreasing } from "../../helperFunctions/isPriceIncreasing";
import { Wrapper, TitleDiv, PriceDiv } from "./styles";

export default function ListItem(crypto: any) {
  return (
    <>
      <Wrapper as={Link} to={`/details/${crypto.uuid}`}>
        <h4>Rank #{crypto.rank}</h4>
        <TitleDiv>
          <img src={crypto.iconUrl} />
          <h1>{crypto.name}</h1>
          <h3>{crypto.symbol}</h3>
        </TitleDiv>
        <PriceDiv price={isPriceIncreasing(crypto.change)}>
          <h3>Price: {dynamicRound(crypto.price, 6)}$</h3>
          <h3>Change: {crypto.change}%</h3>
        </PriceDiv>
        <h3>Market cap: {formatMarketCap(crypto.marketCap)}$</h3>
      </Wrapper>
    </>
  );
}
