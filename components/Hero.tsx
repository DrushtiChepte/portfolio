"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen flex gap-10 ">
      <div className="flex flex-1/12 justify-center text-center relative z-10  min-w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center justify-self-start"
        >
          <h1 className="text-white mb-4 text-5xl md:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="">Hello, I&apos;m </span>
            <br></br>
            <TypeAnimation
              className="text-p3"
              sequence={[
                "Drushti Chepte",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-secondary text-base md:text-xl mb-6 lg:text-2xl">
            From Mechanical roots to Modern Web routes.
          </p>
          <div className="flex justify-center items-center space-x-6 pt-10">
            <a href={"/drushtiChepte_FDResume_2025.pdf"} download>
              <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <span>Download Resume </span>
                  <Image
                    src="./download.svg"
                    height={25}
                    width={25}
                    alt="downloadSvg"
                    className="flex justify-center items-center ml-2"
                  />
                </span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="">
        <Image
          height={50}
          width={50}
          src="/HeroBg.svg"
          alt="grid background"
          className="absolute left-30 top-30 md:left-150 md:top-5"
        />
      </div>
    </section>
  );
};

export default Hero;
