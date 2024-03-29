"use client";

import { Button } from "@/components/ui/button";
import { ICON } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { ShoppingCart } from "@/store/slices";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export const Header = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!search) return;

    router.push(`/search?q=${search}`);
  };

  const totalItems = cart?.length;

  return (
    <header className="flex  flex-col lg:flex-row gap-x-8  gap-y-4 py-6 px-4 bg-walmart items-center justify-center lg:justify-start">
      {/* Logo */}
      <div className="overflow-hidden">
        <Link href="/">{<ICON.WALMART_LOGO />}</Link>
      </div>

      {/* Search */}
      <form
        className="flex w-full max-w-sm items-center space-x-2"
        onSubmit={handleSubmit}
      >
        <Input type="text" placeholder="Search..." onChange={handleChange} />
        <Button
          type="submit"
          className="bg-yellow-500 transition-transform transition-duration-300 transform active:scale-95"
        >
          <Search size={20} className=" stroke-white" />
        </Button>
      </form>

      {/* Links */}
      <div className="flex gap-4 flex-1 lg:justify-end">
        {/* Items */}
        <Link
          href="/"
          className="hidden sm:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />

          <div className="flex flex-col">
            <span className="text-xs font-extralight">Reorder</span>
            <span>My Items</span>
          </div>
        </Link>

        {/* Account */}
        <Link
          href="/"
          className="hidden sm:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div className="flex flex-col">
            <span className="text-xs font-extralight">Sign In</span>
            <span>Account</span>
          </div>
        </Link>

        {/* Cart */}
        <Link
          href="/basket"
          className="hidden sm:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingBag size={20} />
          <div className="flex flex-col">
            <span className="text-xs font-extralight">
              {totalItems > 0 ? totalItems : "No"} Item(s)
            </span>
            <span>${ShoppingCart.calculateSubTotal(cart).toFixed(2)}</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
