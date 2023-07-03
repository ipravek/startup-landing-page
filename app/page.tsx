import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Blog from "@/components/Blog";
import CaseStudy from "@/components/CaseStudy";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import HaveAnyProjects from "@/components/HaveAnyProjects";

export default function Home() {
  return (
    <>
      <div className="container bg-gray-100">
        <Navbar />
        <Hero />
      </div>
      <div className="container">
        <div id="about">
          <About />
        </div>
        <div id="blog">
          <Blog />
        </div>
        <CaseStudy />
        <div id="testimonials">
          <Testimonial />
        </div>

        <HaveAnyProjects />
        <Footer />
      </div>
    </>
  );
}
