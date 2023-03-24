import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import bitcoin from "../../assets/bitcoin.svg";
import Icon from "../Icon";
import { RouteWrapper, Wrapper, NameWrapper, RouteLink } from "./styles";

export default function Navbar() {
  return (
    <Wrapper>
      <NameWrapper as={Link} to="/">
        <Icon icon={bitcoin} />
        <h1>CryptoTracker</h1>
      </NameWrapper>
      <RouteWrapper>
        <RouteLink as={NavLink} to="/">
          <h1>Favorites</h1>
        </RouteLink>
        <RouteLink as={NavLink} to="/search">
          <h1>Cryptocurrencies</h1>
        </RouteLink>
      </RouteWrapper>
    </Wrapper>
  );
}
