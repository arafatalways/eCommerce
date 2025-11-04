import type { IinfoItems } from "@/interface/Interface";
import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

export const InfoSection = () => {
  const infoItems: IinfoItems[] = [
    {
      icon: (
        <FaShippingFast className="text-4xl text-indigo-500 drop-shadow-lg" />
      ),
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-4xl text-pink-500 drop-shadow-lg" />,
      title: "24/7 Support",
      description: "We are here to assist you anytime, anywhere",
    },
    {
      icon: (
        <FaMoneyBillWave className="text-4xl text-green-500 drop-shadow-lg" />
      ),
      title: "Money Back Guarantee",
      description: "Full refund if you are not satisfied with our service",
    },
    {
      icon: <FaLock className="text-4xl text-yellow-500 drop-shadow-lg" />,
      title: "Secure Payment",
      description: "Your payment information is encrypted & safe",
    },
    {
      icon: <FaTag className="text-4xl text-blue-500 drop-shadow-lg" />,
      title: "Exclusive Discount",
      description: "Enjoy the best deals and offers every day",
    },
  ];

  return (
    <section className="relative py-14 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/20 via-transparent to-pink-200/20 dark:from-blue-900/20 dark:to-pink-900/10 blur-3xl opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800 dark:text-gray-100 tracking-wide">
          Why Shop With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            E-Shop?
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center text-center rounded-2xl border border-transparent bg-white/60 dark:bg-gray-800/70 backdrop-blur-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/50"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/30 via-pink-400/20 to-blue-400/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              {/* Icon */}
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
