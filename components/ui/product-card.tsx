import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/app/type";

interface Props {
  product: ProductType;
}

export const ProductCard = ({ product }: Props) => {
  const { id, title, price, thumbnail } = product || {};

  return (
    <Link
      href={{
        pathname: "/product",
        query: { id },
      }}
      className="flex flex-col relative border rounded-md h-full p-5"
    >
      <Image
        src={thumbnail}
        alt={title}
        width={200}
        height={200}
        className="mx-auto"
      />

      <p className="text-xl font-bold">${price}</p>
    </Link>
  );
};
