"use client";

import { AddToCart } from "@/app/product/_components";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hook";
import { ShoppingCart } from "@/store/slices";
import { UTILS_HELPER } from "@/utils";
import Image from "next/image";

export const CheckoutPreview = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const totalItems = cart?.length;

  return (
    <div className="max-w-7xl mx-auto">
      <ul className="space-y-5 divide-y-2">
        {cart?.map((item) => {
          return (
            <li
              className="p-5 my-2 flex items-center justify-between"
              key={item.id}
            >
              {item.images[0] && (
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}
              <div className="flex space-x-4 pl-4">
                <div>
                  <p className="line-clamp-2 font-bold">{item.title}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="line-clamp-1 font-light text-sm mt-2"
                  />
                </div>
                <div className="flex flex-col border roundedd-md p-5">
                  <AddToCart product={item} />
                  <p className="mt-4 font-bold text-right">
                    {(
                      UTILS_HELPER.calculateDiscountedPrice(
                        item.price,
                        item.discountPercentage
                      ) * item.quantity
                    )?.toLocaleString()}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col justify-end p-5">
        {totalItems === 0 && (
          <p className="font-bold text-2xl text-center text-walmart mb-5 w-full  my-4">
            Basket is empty!
          </p>
        )}
        {totalItems > 0 && (
          <p className="font-bold text-2xl text-right text-walmart mb-5">
            Total : ${ShoppingCart.calculateSubTotal(cart).toFixed(2)}
          </p>
        )}
        <Button
          className="mt-5  h-20 bg-walmart hover:bg-walmart/50 text-white"
          disabled={totalItems === 0}
        >
          CheckOut
        </Button>
      </div>
    </div>
  );
};
