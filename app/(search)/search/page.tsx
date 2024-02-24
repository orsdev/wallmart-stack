import { Metadata } from "next";
import { SEARCH_UTILS } from "./utils";
import { Products } from "./_components";
import { Suspense } from "react";
import { SkeletonCard } from "@/components/ui/skeleton-card";

export const metadata: Metadata = {
  title: "Home",
};

interface Props {
  searchParams: {
    [key in string]: string;
  };
}

export default async function SearchPage({ searchParams: { q } }: Props) {
  const data = await SEARCH_UTILS.getProducts(q);
  const { total, products } = data || {};

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-2">Results for {q}</h1>
      <h2 className="mb-5 text-gray-400">{total} results</h2>

      <Suspense
        fallback={
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        }
      >
        <Products products={products} />
      </Suspense>
    </main>
  );
}
