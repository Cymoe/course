"use client";
import { AuthCheck } from "@/app/components/auth-check";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { VideoSection } from "./components/video-section";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Wealth } from "./components/wealth";
import { Mission } from "./components/mission";
import { Projects } from "./components/projects";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";

export default function HomePage() {
  return (
    <AuthCheck requireAuth={false}>
      <div className="bg-black">
        <Header />
        <main>
          <Hero />
          <VideoSection />
          <Projects />
          <Features />
          <About />
          <Wealth />
          <Mission />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </AuthCheck>
  );
}
