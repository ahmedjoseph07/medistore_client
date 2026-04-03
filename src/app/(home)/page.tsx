import HeroSection from "@/components/home/HeroSection";
import TrustStripSection from "@/components/home/TrustStripSection";
import ShopByCategorySection from "@/components/home/ShopByCategorySection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";

export default function Home() {
  return (
    <div className="space-y-14 py-6">
      <HeroSection />
      <TrustStripSection />
      <ShopByCategorySection />
      <FeaturedProductsSection />
    </div>
  );
}
