"use client";

import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";

interface StoreProvider {
  children: ReactNode;
}

export default function StoreProvider({ children }: StoreProvider) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
