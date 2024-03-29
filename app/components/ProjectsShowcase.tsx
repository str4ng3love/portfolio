import GridItem from "./dynamic/GridItem";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="flex justify-center pb-8 ">
      <div className="md:p-16 p-8 mt-16 grid md:gap-8 gap-4 xl:grid-cols-2 grid-cols-1 items-center md:w-[80%] w-full">
        <GridItem
          description="Create an account and post events or market sell orders. Like and comment on posted items."
          title="Eventzor"
          image="eventzor.png"
          linkApp="https://eventzor.vercel.app"
          linkCode="https://github.com/str4ng3love/Eventzor"
          icons={[
            { icon: SiNextdotjs, title: "Next.JS" },
            { icon: SiTypescript, title: "Typescript" },
            {
              icon: SiTailwindcss,
              title: "Tailwind CSS",
            },
            {
              icon: SiMongodb,
              title: "MongoDB",
            },
          ]}
        />
        <GridItem
          description="Simple Pokemon themed memory game made with React, TypeScript and TailwindCSS. "
          title="Memory Game"
          image="memory.png"
          linkApp="https://match-game-olive.vercel.app"
          linkCode="https://github.com/str4ng3love/match-game"
          icons={[
            { icon: SiReact, title: "React" },
            { icon: SiTypescript, title: "Typescript" },
            {
              icon: SiTailwindcss,
              title: "Tailwind CSS",
            },
          ]}
        />
        <GridItem
          description="Speed typing game. Written with React, TypeScript and TailwindCSS. "
          title="Speed Typing Game"
          image="type_game.png"
          linkApp="https://typing-checker-wine.vercel.app"
          linkCode="https://github.com/str4ng3love/typing_checker"
          icons={[
            { icon: SiReact, title: "React" },
            { icon: SiTypescript, title: "Typescript" },
            {
              icon: SiTailwindcss,
              title: "Tailwind CSS",
            },
          ]}
        />
        <GridItem
          description="Blogging site in plain Javascript, Express/EJS with MongoDB. Hosted on Render, might take up to 1 minute to spin up."
          title="Blogging Site"
          image="blogga.png"
          linkApp="https://blogga-v17g.onrender.com"
          linkCode="https://github.com/str4ng3love/blogga"
          icons={[
            { icon: SiExpress, title: "Express" },
            { icon: SiJavascript, title: "Javascript" },
            {
              icon: SiMongodb,
              title: "MongoDB",
            },
          ]}
        />
        <GridItem
          description="Classic Minesweeper. Written with React, TypeScript and TailwindCSS. "
          title="Minesweeper Game"
          image="minesweeper.png"
          linkApp="https://minesweeper-neon-rho.vercel.app"
          linkCode="https://github.com/str4ng3love/minesweeper"
          icons={[
            { icon: SiReact, title: "React" },
            { icon: SiTypescript, title: "Typescript" },
            {
              icon: SiTailwindcss,
              title: "Tailwind CSS",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default ProjectsShowcase;
