import { img } from "motion/react-client";
import { Content } from "next/font/google";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "TechStack", link: "#TechStack" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Linkora- A social media website",
    des: "A social media platform that connects people and allows them to share their thoughts and experiences. Like & save posts, follow friends.",
    img: "/p1.svg",
    techStack: [
      {
        id: 1,
        name: "React",
        designation: "Frontend Library",
        image: "/re.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        designation: "CSS Framework",
        image: "/tail.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        designation: "Typed JavaScript",
        image: "/ts.svg",
      },
      {
        id: 4,
        name: "Supabase",
        designation: "Relational Database",
        image: "/supa.svg",
      },
    ],
    link: "https://linkora-dc.vercel.app/",
    Glink: "https://github.com/DrushtiChepte/linkora",
  },
  {
    id: 2,
    title: "taskShpere- A task management website",
    des: "A task management app that helps you organize your tasks and projects. Create, edit, and delete tasks.",
    img: "/p2.svg",
    techStack: [
      {
        id: 1,
        name: "Node.js",
        designation: "JavaScript Runtime",
        image: "/njs.svg",
      },
      {
        id: 2,
        name: "Express.js",
        designation: "Backend Framework",
        image: "/ex.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        designation: "Relational Database",
        image: "/ps.svg",
      },
    ],
    link: "",
    Glink: "https://github.com/DrushtiChepte/taskSphere",
  },
  {
    id: 3,
    title: "DC Movies",
    des: "Movie database UI with modern design and Integrated API based data rendering",
    img: "/p3.svg",
    techStack: [
      {
        id: 1,
        name: "React",
        designation: "Frontend Library",
        image: "/re.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        designation: "CSS Framework",
        image: "/tail.svg",
      },
    ],
    link: "https://dc-react-movies.vercel.app/",
    Glink: "https://github.com/DrushtiChepte/DC-react-movies",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    techStack: [
      {
        id: 1,
        name: "Next.js",
        designation: "React Framework",
        image: "/next.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        designation: "CSS Framework",
        image: "/tail.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        designation: "Typed JavaScript",
        image: "/ts.svg",
      },
      {
        id: 4,
        name: "Three.js",
        designation: "3D WebGL Library",
        image: "/three.svg",
      },
      {
        id: 5,
        name: "GSAP",
        designation: "Animation Library",
        image: "/gsap.svg",
      },
    ],
    link: "https://iphone-drushti.vercel.app/",
    Glink: "https://github.com/DrushtiChepte/iPhone",
  },
];
export const technologies = [
  { logo: "/html.png", name: "HTML" },
  { logo: "/css.png", name: "CSS" },
  { logo: "/javascript.png", name: "Javascript" },
  { logo: "/re.svg", name: "React JS" },
  { logo: "/next.svg", name: "Next JS" },
  { logo: "/tail.svg", name: "Tailwindcss" },
  { logo: "/ts.svg", name: "Typescript" },
  { logo: "/njs.svg", name: "Node JS" },
  { logo: "/ex.svg", name: "Express" },
  { logo: "/ps.svg", name: "Postgresql" },
  { logo: "/supa.svg", name: "Supabase" },
  { logo: "/gsap.svg", name: "GSAP" },
  { logo: "/git.png", name: "Git" },
];

export const socialMedia = [
  {
    id: 1,
    img: "/mail.svg",
    url: "mailto:drushtichepte@email.com",
  },
  {
    id: 2,
    img: "/github.svg",
    url: "https://github.com/DrushtiChepte",
  },
  {
    id: 3,
    img: "/linkedin.svg",
    url: "https://www.linkedin.com/in/drushti-chepte-64353b294/",
  },
];

export const gridItems = [
  {
    id: 1,
    className: "col-span-2 row-span-4 rounded-xl text-3xl relative",
    img: "/b1.svg",
  },
  {
    id: 2,
    className:
      "col-span-2 md:col-span-1 row-span-4 bg-black rounded-xl bg-black-100 overflow-hidden z-10",
    img: "/myProfile.png",
  },
  {
    id: 3,
    className:
      "col-span-2 md:col-span-1 row-span-1 md:row-span-5 p-4 rounded-xl text-sm font-medium",
    img: "",
  },
  {
    id: 4,
    className:
      "col-span-2 md:col-span-1 row-span-2  p-4 rounded-xl text-sm leading-relaxed",
    img: "",
  },
  {
    id: 5,
    className: "col-span-2 row-span-2 rounded-xl flex flex-col justify-between",
    img: "",
  },
  {
    id: 6,
    className:
      "col-span-2 md:col-span-1 row-span-1 rounded-xl flex justify-center gap-6 text-sm font-medium",
    img: "",
  },
];
