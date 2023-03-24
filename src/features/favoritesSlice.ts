import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FormData } from "../types/formData";

interface UsersState {
  ids: [string];
  custom: [{}];
  coins: [{}];
  coin: {};
  loading: "idle" | "pending" | "succeeded" | "failed";
  singleLoading: "idle" | "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState = {
  ids: ["Qwsogvtv82FCd"],
  custom: [
    {
      iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
      rank: "100-299",
      name: "ShitCoin",
      symbol: "SHT",
      price: "1234.56789",
      change: "Increasing",
      marketCap: "1000",
      websiteUrl: "/details/Qwsogvtv82FCd",
      description: "One of many shitcoins like any other",
    },
  ],
  coins: [{}],
  coin: [],
  loading: "idle",
  singleLoading: "idle",
  error: "",
} as UsersState;

const options = {
  headers: {
    "x-access-token":
      "coinranking97a6884ef910b02580d42e9c74d59ea260ab3a2f7a138c01",
  },
};

export const fetchFavoriteCoins = createAsyncThunk<any, [string]>(
  "/favs",
  async (favs: [string]) => {
    let url = "?";
    favs.map((id) => {
      url = url + `uuids[]=${id}&`;
    });
    url = url.slice(0, -1);
    const response = await axios.get(
      `https://api.coinranking.com/v2/coins${url}`,
      options
    );
    return await response.data;
  }
);

export const fetchCoinByName = createAsyncThunk<any, string | undefined>(
  "/crypto/:name",
  async (coin: string | undefined) => {
    const response = await axios.get(
      `https://api.coinranking.com/v2/coin/${coin}`,
      options
    );

    return await response.data;
  }
);

export const favoritesSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.coins.push(action.payload);
    },
    addCustom: (state, action) => {
      state.custom.push(action.payload);
    },
    addId: (state, action) => {
      state.ids.push(action.payload);
    },
    addCoin: (state, action) => {
      let custom = state.custom;
      custom.map((crypto: any) => {
        if (
          crypto.name === action.payload.substring(6, action.payload.length)
        ) {
          state.coin = crypto;
        }
      });
    },

    deleteFavorite: (state, action) => {
      let index;
      if (action.payload.custom) {
        index = state.custom.findIndex(
          (coin: any) => coin.name === action.payload.value.name
        );
        state.custom.splice(index, 1);
      } else {
        index = state.ids.indexOf(action.payload.value);
        state.ids.splice(index, 1);
      }
    },
    deleteFromIds: (state, action) => {
      const index = state.custom.indexOf(action.payload.uuid);
      state.custom.splice(index, 1);
    },
    changeLoadingToIdle: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteCoins.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchFavoriteCoins.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchFavoriteCoins.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.coins = action.payload.data.coins;
      });
    builder.addCase(fetchCoinByName.fulfilled, (state, action) => {
      state.singleLoading = "succeeded";
      state.coin = action.payload.data.coin;
    });
  },
});

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["custom", "ids"],
};

const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);

export default persistedFavoritesReducer;

export const getIds = (state: any) => state.favs.ids;
export const getCoin = (state: any) => state.favs.coin;
export const getCoins = (state: any) => state.favs.coins;
export const getCustom = (state: any) => state.favs.custom;
export const getLoading = (state: any) => state.favs.loading;
export const getSLoading = (state: any) => state.favs.singleLoading;
export const getError = (state: any) => state.favs.error;

export const {
  addFav,
  addCustom,
  addId,
  deleteFavorite,
  deleteFromIds,
  changeLoadingToIdle,
  addCoin,
} = favoritesSlice.actions;
