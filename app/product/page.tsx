import { Metadata } from "next";
import { PRODUCT_UTILS } from "./utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Search",
};

interface Props {
  searchParams: {
    [key in string]: string;
  };
}

export default async function ProductPage({ searchParams: { id } }: Props) {
  const data = await PRODUCT_UTILS.getProduct(id);
  const { images, description, price, rating, title } = data || {};

  return (
    <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
      <div className="hidden lg:inline space-y-4">
        {images?.map((image) => (
          <Image
            key={image}
            src={image}
            alt={title}
            width={90}
            height={90}
            className="border rounded-sm"
          />
        ))}
      </div>

      <Carousel
        opts={{ loop: true }}
        className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20"
      >
        <CarouselContent>
          {images?.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-2 relative">
                  <Image
                    key={image}
                    src={image}
                    alt={title + "" + i}
                    height={400}
                    width={400}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex-1 border rounded-md w-full p-5 space-y-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="py-5"
        />
        {rating && (
          <p className="text-yellow-500 text-sm">
            {rating}★
            <span className="text-gray-400 ml-2">({rating} reviews)</span>
          </p>
        )}
        <p className="text-2xl font-bold mt-2">${price}</p>
        {/* Add to Cart Button */}
        {/* <AddToCart product={product} /> */}
        <hr />
      </div>
    </div>
  );
}
