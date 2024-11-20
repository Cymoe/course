import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { VideoSection } from "./components/video-section";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Wealth } from "./components/wealth";
import { Value } from "./components/value";
import { Mission } from "./components/mission";
import { Projects } from "./components/projects";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";

export default function HomePage() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        
        <About />
        <Features />
        <Mission />
        <Projects />
        <Wealth />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
