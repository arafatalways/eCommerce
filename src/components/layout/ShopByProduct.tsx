import { ProductCard } from "@/components/layout/ProductCard";
import type { IProductSlice } from "@/interface/Interface";
import { useSelector } from "react-redux";

export const ShopByProduct = () => {
  // ✅ useSelector এ সঠিক টাইপ ব্যবহার
  const { products } = useSelector((state: any) => state.product);

  return (
    <section className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-10 text-gray-800 dark:text-white tracking-wide">
        Shop by Products
      </h2>

      {/* Product Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-6 
          place-items-center
        "
      >
        {products && products.length > 0 ? (
          products.map((productSlice: IProductSlice) => (
            <ProductCard key={productSlice.id} productSlice={productSlice} />
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg col-span-full">
            No products available.
          </p>
        )}
      </div>
    </section>
  );
};
