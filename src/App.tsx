import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/layout/HeroSection";
import { Navbar } from "@/components/layout/Navbar";
import { Shop } from "@/components/layout/ShopByProduct";

function App() {
  return (
    <>
      <div>
        <h4>
          <Navbar />
          <HeroSection />
          <Shop />
          <Footer />
        </h4>
      </div>
    </>
  );
}

export default App;
