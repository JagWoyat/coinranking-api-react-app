import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import cryptocurrencySlice from "./features/cryptocurrencySlice";
import favoritesSlice from "./features/favoritesSlice";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import persistedFavoritesReducer from "./features/favoritesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  crypto: cryptocurrencySlice,
  favs: favoritesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
