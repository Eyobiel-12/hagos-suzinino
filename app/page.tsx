import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContraSection from "@/components/ContraSection";
import QuoteSection from "@/components/QuoteSection";
import SpotifySection from "@/components/SpotifySection";
import BookSection from "@/components/BookSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ContraSection />
      <QuoteSection />
      <SpotifySection />
      <BookSection />
      <Footer />
    </main>
  );
}
