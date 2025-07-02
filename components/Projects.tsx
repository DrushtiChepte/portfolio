import { projects } from "@/data";
import { AnimatedTooltip } from "./ui/tooltip";

const Projects = () => {
  return (
    <section id="projects" className="py-20 z-10">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-20">
        A small selection of <span className="text-p3">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 z-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-auto md:w-[38rem] sm:w-96 w-[80vw] flex flex-col justify-between border border-white/[.1] rounded-3xl p-6 bg-black-100 hover:bg-black-100/[.3] shadow-2xl transition-all duration-300"
          >
            {/* Image container */}
            <div className="relative flex items-center justify-center overflow-hidden mb-10 md:h-[35vh] h-[25vh]">
              <div
                className="relative w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl "
                style={{ backgroundColor: "#13162D" }}
              >
                <img src="/bg.png" alt="bgimg" />
              </div>
              <img
                src={item.img}
                alt="cover"
                className="absolute z-10 h-full scale-110 transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Text Content */}
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {item.title}
            </h1>
            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 my-2"
              style={{ color: "#BEC1DD" }}
            >
              {item.des}
            </p>
            {/* Icons + Link */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center">
                <AnimatedTooltip items={item.techStack} />
              </div>

              <div className="lg:text-xl md:text-xs text-sm text-p3">
                {item.id === 2 ? (
                  <span>{""}</span>
                ) : (
                  <>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check Live Site
                    </a>
                  </>
                )}
                {" | "}
                <a href={item.Glink} target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
