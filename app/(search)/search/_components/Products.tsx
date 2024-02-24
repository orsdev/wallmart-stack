import { ProductType } from "@/app/type";
import { ProductCard } from "@/components/ui/product-card";

export const Products = ({ products }: { products: Array<ProductType> }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products?.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
