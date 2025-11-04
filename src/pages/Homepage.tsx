import { Advance } from "@/components/layout/Advance";
import { CategorySection } from "@/components/layout/CategorySection";
import { HeroSection } from "@/components/layout/HeroSection";
import { InfoSection } from "@/components/layout/InfoSection";
import { ShopByProduct } from "@/components/layout/ShopByProduct";

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      <CategorySection />
      <Advance />
      <ShopByProduct />
    </div>
  );
};
