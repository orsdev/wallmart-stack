"use client";

import { ProductType } from "@/app/type";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { ShoppingCart, addToCart, reduceCartQty } from "@/store/slices";

export const AddToCart = ({ product }: { product: ProductType }) => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const currentItem = ShoppingCart.isInCart(product?.id, cart);

  if (
    currentItem.inCart &&
    currentItem.item &&
    currentItem.item?.quantity > 0
  ) {
    return (
      <div className="flex space-x-5 items-center">
        <Button
          className="bg-walmart hover:bg-walmart/50"
          onClick={() => {
            dispatch(reduceCartQty({ id: product.id, item: cart }));
          }}
        >
          -
        </Button>

        <span>{currentItem.inCart ? currentItem.item?.quantity : 0}</span>
        <Button
          className="bg-walmart hover:bg-walmart/50"
          onClick={() => {
            dispatch(addToCart({ toBeAdded: product, item: cart }));
          }}
        >
          +
        </Button>
      </div>
    );
  }
  return (
    <div>
      <Button
        className="bg-walmart hover:bg-walmart/50 text-white"
        onClick={() => {
          dispatch(addToCart({ toBeAdded: product, item: cart }));
        }}
      >
        AddToCart
      </Button>
    </div>
  );
};
