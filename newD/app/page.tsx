import { About } from "@/components/about";
import { AcademySection } from "@/components/academy";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { TestimonialsSection } from "@/components/testimonials";
import TeamSection  from "@/components/teamSection";


export default function Page() {
  return (
    <>
  <Header />
  <main>
    <Hero />
    <About />
    <TestimonialsSection />
    <AcademySection />
    <Services />
    <TeamSection />
  </main>
  <Footer />
</>

  );
}
