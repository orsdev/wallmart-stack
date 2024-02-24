import { ProductType } from "@/app/type";

async function getProducts(search_value: string) {
  const res = await fetch(
    `${process.env.BASE_ENDPOINT}/products/search?q=${search_value}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{ total: number; products: ProductType[] }>;
}

export const SEARCH_UTILS = {
  getProducts,
};
