import HeroArea from "@/components/home/HeroArea";
import Companies from "@/components/home/Companies";
import CategorySection from "@/components/home/CategorySection";
import ExloreSection from "@/components/home/ExloreSection";
import GrowthSection from "@/components/home/GrowthSection";
import UnlockSection from "@/components/home/UnlockSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroArea />
      <Companies />
      <CategorySection />
      <ExloreSection />
      <GrowthSection />
      <UnlockSection />
      <TestimonialSection />
    </>
  );
}
