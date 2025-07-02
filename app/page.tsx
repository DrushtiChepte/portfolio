import Hero from "@/components/Hero";
import "./globals.css";
import About from "@/components/About";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { navItems } from "@/data";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-8xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </div>
    </main>
  );
}
