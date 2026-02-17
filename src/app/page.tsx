import Hero from "@/app/components/Hero";
import GalleryCarousel from "@/app/components/GalleryCarousel";
import About from "@/app/components/About";
import AsymmetricScroll from "@/app/components/AsymmetricScroll";
import Menu from "@/app/components/Menu";
import Locations from "@/app/components/Locations";
import Reviews from "@/app/components/Reviews";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <GalleryCarousel />
      <About />
      <AsymmetricScroll />
      <Menu />
      <Locations />
      <Reviews />
      <Footer />
    </main>
  );
}
