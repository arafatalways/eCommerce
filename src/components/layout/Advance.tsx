import { ProductCard } from "@/components/layout/ProductCard";
import { useSelector } from "react-redux";
import type { IProductSlice } from "@/interface/Interface";

export const Advance = () => {
  const { products } = useSelector((state: any) => state.product);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* ===== Section Header ===== */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            🔥 Top Products
          </span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Discover our latest and most popular items — tailored for you.
        </p>
        <div className="w-24 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* ===== Product Grid ===== */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-8
          place-items-center
          max-w-7xl 
          mx-auto
        "
      >
        {products && products.length > 0 ? (
          products.slice(0, 5).map((productSlice: IProductSlice) => (
            <div
              key={productSlice.id}
              className="
                w-full max-w-sm 
                transform transition-all 
                hover:scale-[1.04] 
                hover:-translate-y-1 
                duration-300
              "
            >
              <ProductCard productSlice={productSlice} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-300 text-lg col-span-full">
            No products found. Please check again later.
          </p>
        )}
      </div>
    </section>
  );
};
