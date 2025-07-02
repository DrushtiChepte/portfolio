"use client";

import { technologies } from "@/data";
import { Button } from "./ui/MovingBorder";
import Image from "next/image";

const TechStack = () => {
  return (
    <section id="TechStack" className="py-10 md:py-20">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-0 md:mb-10">
        Tools I’m <span className="text-p3">Growing</span> With
      </h1>
      <div className="flex gap-5 flex-wrap justify-center items-center md:justify-start lg:justify-center py-10">
        {technologies.map((tech, index) => (
          <Button key={index} borderRadius="1rem" className="bg-black-100">
            <Image src={tech.logo} height={25} width={25} alt={tech.name} />
            <p className="pl-2 text-sm">{tech.name}</p>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
