import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedCompanies from "./components/TrustedCompanies";
import Programs from "./components/Programs";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedCompanies />
        <Programs />
        <Features />
        <Benefits />
        <Process />
        <Statistics />
        <Testimonials />
        <FAQ />
        <CTA />
        <LeadForm />
      </main>

      <Footer />
    </>
  );
}