import { socialMedia } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

const Contact = () => {
  return (
    <footer id="contact" className="pt-5 md:pt-10 pb-5 px-20">
      <div className="relative z-10 flex flex-col justify-center items-center py-20 text-center">
        <h2 className="text-5xl font-bold mb-4">
          Let’s Build Something <span className="text-p3">Awesome</span>
        </h2>
        <p className="text-gray-600 dark:text-zinc-400 max-w-lg mx-auto mb-6">
          I'm always open to collaborating on exciting projects or just chatting
          about tech. Don’t hesitate to reach out!
        </p>
        <a
          href="mailto:drushtichepte@email.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <span className="pr-2">Let's get in touch</span>
              <FaLocationArrow />
            </span>
          </button>
        </a>
      </div>
      <div>
        <img
          src="/HeroBg.svg"
          alt="grid background"
          height={700}
          width={700}
          className="absolute bottom-[5rem] left-[5rem] md:-bottom-10 md:left-[55rem]"
        />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between gap-2 items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025
        </p>
        <p>Made with ❤️ by Drushti Chepte</p>
      </div>
    </footer>
  );
};

export default Contact;
