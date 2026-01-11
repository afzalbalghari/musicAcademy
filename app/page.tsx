import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Image from "next/image";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen antialiased items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
    </main>
  );
}
