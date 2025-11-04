import { ProductCard } from "@/components/layout/ProductCard";
import type { IProductSlice } from "@/interface/Interface";
import { useSelector } from "react-redux";

export const ShopByProduct = () => {
  const products = useSelector((state: any) => state.product);

  return (
    <div className=" dark:bg-gray-900">
      <div className="py-12 lg:mx-5 md:mx-30 sm:mx-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white tracking-wide">
          Shop by Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.products.map((productSlice: IProductSlice) => (
            <ProductCard productSlice={productSlice} />
          ))}
        </div>
      </div>
    </div>
  );
};
