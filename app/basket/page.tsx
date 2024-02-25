import { ShoppingCartIcon } from "lucide-react";
import { Metadata } from "next";
import { CheckoutPreview } from "./_components";

export const metadata: Metadata = {
  title: "Basket",
};

export default function BasketPage() {
  return (
    <div className="w-full p-10 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <ShoppingCartIcon className="w-10 h-10" />
        <h1 className="text-3xl font-">Your Cart</h1>
      </div>
      <p>Review the items in your cart and checkout when ready!</p>

      <CheckoutPreview />
    </div>
  );
}
