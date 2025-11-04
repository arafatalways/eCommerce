import type { IProductSlice } from "@/interface/Interface";
import { FaStar } from "react-icons/fa";

export const ProductCard = ({
  productSlice,
}: {
  productSlice: IProductSlice;
}) => {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-indigo-400/40 transition-all duration-500 overflow-hidden hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={productSlice.img}
          alt={productSlice.name}
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Quick Action Button */}
        <button className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:from-indigo-500 hover:to-pink-500">
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1 truncate">
          {productSlice.name}
        </h2>
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg mb-2">
          ${productSlice.price}
        </p>

        {/* Rating */}
        <div className="flex justify-center gap-1 text-yellow-400 mb-3">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className="text-gray-300" />
        </div>

        {/* View Details Button */}
        <button className="w-full py-2 mt-auto rounded-lg font-semibold text-sm bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-pink-500 hover:to-orange-400 transition-all duration-300 shadow-md hover:shadow-pink-400/30">
          View Details
        </button>
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-400/60 transition-all duration-500"></div>
    </div>
  );
};
