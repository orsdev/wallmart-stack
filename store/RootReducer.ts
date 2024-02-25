import { combineReducers } from "@reduxjs/toolkit";
import { ProductsApi } from "./api";

const rootReducer = combineReducers({
  [ProductsApi.reducerPath]: ProductsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
