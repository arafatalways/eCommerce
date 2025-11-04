import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/layout/HeroSection";
import { Navbar } from "@/components/layout/Navbar";
import { ShopByProduct } from "@/components/layout/ShopByProduct";

function App() {
  return (
    <>
      <div>
        <h4>
          <Navbar />
          <HeroSection />
          <ShopByProduct />
          <Footer />
        </h4>
      </div>
    </>
  );
}

export default App;
