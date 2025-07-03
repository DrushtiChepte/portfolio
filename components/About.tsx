"use client";
import { gridItems, socialMedia } from "@/data";
import { TextRevealCard, TextRevealCardTitle } from "./ui/TextReveal";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-10">
        About <span className="text-p3">Me</span>{" "}
      </h1>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-6 gap-6 z-10">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className={`border border-white/[.2] flex items-center justify-center relative ${item.className}`}
          >
            {item.id === 1 && (
              <div className="relative w-full h-full rounded-xl flex items-end overflow-hidden">
                {item.img && (
                  <img
                    src={item.img}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-black/70" />

                {/* Content */}
                <div className="relative p-6 z-10 text-sm flex flex-col items-end gap-4">
                  <p>
                    Hello again 👋, I&apos;m a Mechanical Engineering student
                    who discovered a deep passion for web development. While I
                    still enjoy the problem-solving side of mechanical,
                    I&apos;ve grown more excited about creating through code.
                  </p>
                  <p>
                    Though I don&apos;t come from a CS background, I&apos;ve
                    been learning through practice—building projects, exploring
                    online resources, and figuring things out one step at a
                    time. I really enjoy the process of turning ideas into
                    working websites, and seeing them come to life on the
                    screen.
                  </p>
                </div>
              </div>
            )}

            {item.id === 2 && (
              <div className="p-5 md:p-10">
                {item.img && (
                  <img
                    src={item.img}
                    alt="profile"
                    className="z-10 relative rounded-lg h-40 w-39 md:h-full md:w-full"
                  />
                )}
              </div>
            )}

            {item.id === 3 && (
              <div className="relative w-full h-full p-6 text-white flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-p3">Education 🎓</h2>

                <div className="flex flex-col gap-4 text-sm">
                  <div>
                    <h3 className="text-base font-medium text-white">
                      B.E. in Mechanical Engineering
                    </h3>
                    <p className="text-gray-400">
                      PES Modern College of Engineering, Pune
                    </p>
                    <p className="text-gray-500 text-xs">2022 – 2026</p>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-white">
                      Higher Secondary Education (12th)
                    </h3>
                    <p className="text-gray-400">
                      SNBP International Jr. College,Pune
                    </p>
                    <p className="text-gray-400">
                      Percentage: <span className="text-white">86%</span>
                    </p>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-p3">
                  Certifications
                </h2>

                <div className="flex flex-col gap-4 text-sm">
                  <div>
                    <h3 className="text-base font-medium text-white flex gap-1 items-center">
                      Full Stack Web Development
                    </h3>

                    <a
                      href="https://drive.google.com/file/d/1-EVYoLHm3WsMBxTFyjBM-iURD1c5l5my/view"
                      className="flex gap-1 items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="cursor-pointer hover:text-p3">view</span>
                      <FaLocationArrow className="text-p2" />
                    </a>

                    <p className="text-gray-400">Udemy</p>
                    <p className="text-gray-500 text-xs">2024</p>
                  </div>
                </div>
              </div>
            )}

            {item.id === 4 && (
              <div className="flex flex-col items-center justify-around p-1 gap-5">
                <h1 className="text-2xl font-bold text-center">
                  Do you want to start project together?
                </h1>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText("cheptedrushti@gmail.com")
                  }
                  className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl">
                    <Image
                      src="/copy.svg"
                      height={20}
                      width={20}
                      alt="copy"
                      className="mr-1"
                    />{" "}
                    cheptedrushti@gmail.com
                  </span>
                </button>
              </div>
            )}

            {item.id === 5 && (
              <div suppressHydrationWarning>
                <TextRevealCard
                  text="Full Stack Developer 👩🏻‍💻"
                  revealText="Mechanical Engineer Student 👩🏻‍🔧"
                >
                  <TextRevealCardTitle>
                    Hover over the card!
                  </TextRevealCardTitle>
                </TextRevealCard>
              </div>
            )}

            {item.id === 6 && (
              <div className="flex items-center gap-6 py-4 md:py-0">
                {socialMedia.map((info) => (
                  <a
                    href={info.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={info.id}
                    className="w-10 h-10   cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-white/[.2]"
                  >
                    <img
                      src={info.img}
                      alt="icons"
                      width={20}
                      height={20}
                      className="transition-transform duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(180,130,255,0.5)]"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
