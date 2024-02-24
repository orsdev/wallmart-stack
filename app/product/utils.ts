import { ProductType } from "@/app/type";

async function getProduct(id: string) {
  const res = await fetch(`${process.env.BASE_ENDPOINT}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<ProductType>;
}

export const PRODUCT_UTILS = {
  getProduct,
};
