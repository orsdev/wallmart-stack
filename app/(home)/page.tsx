import { GridOption } from "@/components/ui/grid-option";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main>
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GridOption
          title="Phone"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-32"
        />

        <GridOption
          title="Clothe"
          image="https://links.papareact.com/8ko"
          className="bg-pink-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Bicycle"
          image="https://links.papareact.com/szu"
          className="bg-pink-200 row-span-2"
        />
        <GridOption
          title="Perfume"
          image="https://links.papareact.com/n7r"
          className="bg-pink-100 h-64"
        />
        <GridOption
          title="Wardrobe"
          image="https://links.papareact.com/pj2"
          className="bg-green-100 h-64 col-span-2"
        />
        <GridOption
          title="Bed"
          image="https://links.papareact.com/m8e"
          className="bg-red-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Gadgets"
          image="https://links.papareact.com/gs1"
          className="bg-orange-100 h-64"
        />
        <GridOption
          title="Shop Beauty"
          image="https://links.papareact.com/4y0"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Shop Sports"
          image="https://links.papareact.com/sq2"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Shop Toys"
          image="https://links.papareact.com/9hf"
          className="bg-pink-100 h-64"
        />
        <GridOption
          title="Shop Toys"
          image="https://links.papareact.com/qx7"
          className="bg-pink-100 h-64 col-span-2"
        />
      </div>
    </main>
  );
}
