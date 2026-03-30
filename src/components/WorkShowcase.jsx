import {useRef} from "react";
import MagneticCircle from "./MagneticCircle";
import { RectangleHorizontal, ArrowRight } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "UrbanShopping",
    cardClass: "urbanShopping-project ",
    textClass: "urban-text z-10",
    image: "/projects/project1.jpeg",
    description:
      "A full-featured e-commerce platform built to replicate real-world shopping experiences, from product discovery to secure checkout. It includes role-based authentication, an admin dashboard, cart and order management, and seamless payment integration.",
    tag : "Fullstack . E-commerce Platform",
    url : "https://urbanvibeshopping.vercel.app/"
  },
  {
    id: 2,
    title: "Gideon",
    cardClass: "gideon-project ",
    textClass: "gideon-text z-9",
    image: "/projects/project2.png",
    description:
      "An AI-powered conversational assistant designed for context-aware and memory-driven interactions. It combines real-time responses with short-term chat memory and long-term vector storage to maintain continuity across conversations.",
    tag : "Fullstack . Ai Assistant",
    url : "https://gidieon-ai-assistant-1.onrender.com/"
  },
  {
    id: 3,
    title: "Fokus",
    cardClass: "fokus-project",
    textClass: "fokus-text z-8",
    image: "/projects/project3.png",
    description:
      "A visually immersive brand experience built for an influencer-driven product, focusing on storytelling through motion with scroll-triggered animations and dynamic transitions.",
    tag : "Frontend . Brand Website",
    url : "https://fokus-hackethon-website.vercel.app/"
  },
  {
    id: 4,
    title: "MoodyPlayer",
    cardClass: "MoodyPlayer-project",
    textClass: "MoodyPlayer-text z-7",
    image: "/projects/project4.jpeg",
    description:
      "An emotion-aware music player that detects facial expressions via camera and dynamically recommends songs based on user mood for a personalized listening experience.",
    tag : "Fullstack . AI Music Player",
    url : "https://moody-player-ten.vercel.app/"
  }
];

const WorkShowcase = () => {
  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <div
    
     className="red-wrapper w-full h-full relative overflow-hidden bg-[#111214] px-4 z-50 will-change-transform ">

      <h2 className="font-[Azonix] text-[8.5vw] text-white relative ml-30 md:mt-15 lg:mt-10 ">
        Work
        <span className="absolute top-5 text-xs text-white">
          ({projects.length})
        </span>
      </h2>

      <div className="pro-line w-full h-px bg-white/80 will-change-transform" />
      <span className="dot text-white text-xs flex gap-1 ">
        <RectangleHorizontal size={8} className="bg-white mt-1"/>
        (03)
      </span>

      <h5 className="project-heading text-xl font-[Montserrat] text-center text-white">
        SHOWCASE
      </h5>

      <div className="cardWrapper w-full h-[60vh] flex justify-between items-center bg-[#E6E6E6] p-1 font-[Montserrat] will-change-transform">

        
        <div
        
        className="w-1/2 h-full flex justify-center items-center relative">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.cardClass}
              lg:h-[35vh] absolute overflow-hidden shadow-lg `}
            >

              <a 
        href={project.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full h-full cursor-pointer relative overflow-hidden"
      >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain border border-black/10"
              /></a>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="w-1/2 h-full flex justify-center items-center relative ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-text ${project.textClass} absolute w-full top-0 mt-22 bg-[#E6E6E6] px-10`}
            >
              <div className="flex justify-between w-full items-center text-black">
                <div className="relative flex ">
                  <span className={`project-number text-sm`}>
                    {formatNumber(index + 1)}
                  </span>
                  <span className="total-projects absolute left-4.5 ">/4</span>
                </div>

    
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-view flex items-center gap-0.5 group cursor-pointer text-black"
                >
                  <div className="font-semibold relative  group text-sm scale-cursor">View Live 
                    <span className="w-1 h-1 group-hover:h-0.5 group-hover:w-full rounded-full bg-black absolute -bottom-1 left-0 transition-all duration-300 pointer-events-none "/></div>
                  <ArrowRight size={18} className="transition-transform  group-hover:-translate-y-2 group-hover:translate-x-0.5  duration-300 group-hover:-rotate-45" />
                </a>
              </div>

              <h2 className="text-[3vw] font-semibold mb-1 text-nowrap text-black">
                {project.title}
              </h2>

              <div className="divider-line w-full h-px bg-black/80 mb-4" />

              <p className="text-black  tracking-wide">
                {project.description}
              </p>
 <div className="divider-line w-full h-px bg-black/90 mb-1" />
              <p className="text-xs uppercase tracking-widest text-black/60 mt-4 ">
                {project.tag}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <MagneticCircle className="allProject-circ bg-[#1C1D20] border border-white/10 group 
      absolute bottom-10 right-20 z-10 text-white">
        <span className="text-center z-10">
          More <br /> Work
        </span>
        <span className="bg-blue-900/80 w-full h-full absolute top-0 translate-x-full rounded-full group-hover:translate-x-0 transition-all duration-300" />
      </MagneticCircle> */}

    </div>
  );
};

export default WorkShowcase;