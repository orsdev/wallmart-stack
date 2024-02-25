import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShoppingCart } from "./cart.utils";
import { ProductType } from "@/app/type";

export type CartItem = ProductType & { quantity: number };

type CartState = {
  cart: Array<CartItem>;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  } as CartState,
  reducers: {
    addToCart: (
      state: CartState,
      action: PayloadAction<{
        toBeAdded: ProductType;
        item: CartItem[];
      }>
    ) => {
      state.cart = ShoppingCart.addItemToCart({
        itemToBeAdded: action.payload.toBeAdded,
        cartItems: action.payload.item,
      });
    },
    removeFromCart: (state: CartState, action: PayloadAction<any>) => {
      state.cart = ShoppingCart.removeItemFromCart(
        action.payload.id,
        state.cart
      );
    },
    reduceCartQty: (
      state: CartState,
      action: PayloadAction<{ id: number; item: CartItem[] }>
    ) => {
      state.cart = ShoppingCart.reduceItemQty(
        action.payload.id,
        action.payload.item
      );
    },
    increaseCartQty: (
      state: CartState,
      action: PayloadAction<{ id: number; item: CartItem[] }>
    ) => {
      state.cart = ShoppingCart.increaseItemQty(
        action.payload.id,
        action.payload.item
      );
    },
    emptyCart: (state: CartState) => {
      state.cart = [];
    },
  },
});

export const {
  removeFromCart,
  addToCart,
  reduceCartQty,
  increaseCartQty,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
