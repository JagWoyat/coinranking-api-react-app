import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCustom } from "./favoritesSlice";

interface UsersState {
  crypto: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState = {
  crypto: [],
  loading: "idle",
  error: "",
} as UsersState;

const options = {
  headers: {
    "x-access-token":
      "coinranking97a6884ef910b02580d42e9c74d59ea260ab3a2f7a138c01",
  },
};

export const fetchCoins = createAsyncThunk("/crypto", async () => {
  const response = await axios.get(
    "https://api.coinranking.com/v2/coins",
    options
  );
  return await response.data;
});

export const cryptocurrencySlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    addCrypto: (state, action) => {
      state.crypto = action.payload;
    },
    changeLoadingToIdle: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCoins.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.crypto = action.payload.data.coins;
      });
  },
});

export default cryptocurrencySlice.reducer;

export const getCrypto = (state: any) => state.crypto.crypto;
export const getCryptoLoading = (state: any) => state.crypto.loading;
export const getCryptoError = (state: any) => state.crypto.error;

export const { addCrypto, changeLoadingToIdle } = cryptocurrencySlice.actions;
