import { ProductCard } from "@/components/layout/ProductCard";
import { useSelector } from "react-redux";

export const Advance = () => {
  const products = useSelector((state: any) => state.product);
  return (
    <div>
      {/* ================= PRODUCT SECTION ================= */}
      <section className="dark:bg-gray-900 py-10 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-extrabold  text-gray-800 dark:text-white mb-8 relative  after:content-[''] after:block after:w-20 after:h-[3px] after:bg-blue-500 after:mx-auto after:mt-2">
            🔥 Top Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.products
              .slice(0, 5)
              .map((productSlice: any, index: number) => (
                <div
                  key={index}
                  className="hover:scale-[1.03] transition-transform duration-300"
                >
                  <ProductCard productSlice={productSlice} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
