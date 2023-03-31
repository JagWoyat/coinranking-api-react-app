import React, { useState } from "react";
import styled from "styled-components";
import FavoritesWrapper from "../components/FavoritesWrapper/FavoritesWrapper";
import Form from "../components/Form/Form";
import ListItem from "../components/Listitem/ListItem";
import Navbar from "../components/Navbar/Navbar";
import NewCryptoBar from "../components/NewCryptoBar/NewCryptoBar";
import { addCustom } from "../features/favoritesSlice";
import { useAppDispatch } from "../helperFunctions/hooks";

export default function Root() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Navbar />
      <FavoritesWrapper />
      <NewCryptoBar
        onSubmit={(model: FormData) => {
          dispatch(addCustom(model));
        }}
      />
    </div>
  );
}
