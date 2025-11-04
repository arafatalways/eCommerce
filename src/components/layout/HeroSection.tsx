import { Categories, MockData } from "@/assets/CategoryData";
import { setProducts } from "@/redux/features/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const HeroSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(MockData));
  }, [dispatch]);

  return (
    <div className="dark:bg-gray-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-10">
          {/* Wrapper */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* ===== Left: Category List ===== */}
            <aside className="w-full md:w-3/12 shadow-xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <h4 className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 font-bold text-center text-lg tracking-wide">
                🛍 SHOP BY CATEGORY
              </h4>

              <ul className="px-5 py-4 space-y-3">
                {Categories.map((category, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-800 dark:text-gray-100 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {category}
                  </li>
                ))}
              </ul>
            </aside>

            {/* ===== Right: Hero Banner ===== */}
            <div className="relative w-full md:w-9/12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                src="/images/hero.jpg"
                alt="Hero Banner"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center items-start px-6 sm:px-10 text-white">
                <p className="text-sm sm:text-base font-medium uppercase tracking-widest text-gray-200">
                  E-Shop
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold py-3 leading-tight">
                  Discover Your Perfect Style
                </h1>
                <p className="text-sm sm:text-lg font-light mb-5 text-gray-300">
                  Explore Millions of Premium Products
                </p>

                <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-rose-600 hover:to-pink-600 py-3 px-8 rounded-full text-lg font-semibold shadow-xl hover:shadow-pink-500/40 transition-all duration-300">
                  Start Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFO SECTION ================= */}

      {/* ================= CATEGORY SECTION ================= */}
    </div>
  );
};
