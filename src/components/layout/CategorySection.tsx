import type { ICategoryData } from "@/interface/Interface";

export const CategorySection = () => {
  const categoryData: ICategoryData[] = [
    {
      title: "Men’s Collection",
      img: "/images/man.jpg",
    },
    {
      title: "Women’s Fashion",
      img: "/images/woman.jpg",
    },
    {
      title: "Kids’ Zone",
      img: "/images/kids.jpg",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500">
      <div className="px-4 mx-auto container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white tracking-wide">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((category, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transform hover:scale-[1.03] transition-all duration-500"
            >
              {/* Background Image */}
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-72 object-cover group-hover:brightness-75 transition-all duration-500"
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col justify-center items-start px-8 py-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                  {category.title}
                </h3>
                <button className="mt-4 px-5 py-2 bg-[#8ec5ff] text-gray-900 font-semibold rounded-full shadow-md hover:bg-[#60a5fa] transition-all duration-300">
                  View All →
                </button>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
