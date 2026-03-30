import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrambleTextPlugin } from "gsap/all"
import { ArrowDownLeft, ArrowDownToLine, MoveDown, MoveUpRight } from 'lucide-react';
import { SplitText } from "gsap/SplitText";
import AboutMe from "./AboutMe";
import MagneticCircle from "../components/MagneticCircle";
import Resume from "../components/Resume";

gsap.registerPlugin(ScrambleTextPlugin, SplitText)

const words = [
  "CREATIVE DEVELOPER",
  "GSAP ANIMATION SPECIALIST",
  "REACT + MOTION DESIGN",
  "FULLSTACK DEVELOPER",
  "FRONTEND + BACKEND",
  "REACT • NODE • MONGO",
  "BUILDING REAL WORLD APPS",

]

const HeroSection = ({ startAnimation }) => {

  const circleRef = useRef(null)
  const blobRef = useRef()
  useGSAP(() => {

    if (!startAnimation) return

    gsap.set(".brand-name", { opacity: 0 })

    const tl = gsap.timeline({ repeat: -1 })


    words.forEach((word) => {
      tl.to(".element", {
        duration: 1.7,

        scrambleText: {
          text: word,
          chars: "XO$#@!*",
          revealDelay: 0.8,
          speed: 0.25,
        },
        ease: "none",
      }).to({}, { duration: 2 })
    })




    gsap.fromTo([".brand-name",".hero-animate-text"], 
    { 
      y: 150, 
      opacity: 0, 
    }, 
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.7, 
      stagger:0.1,
      ease: "power4.out",
      
    })



  }, [startAnimation])

  return (<>
    <section
      id="hero"
      className="cursor-none relative hero  h-screen w-screen flex flex-col items-center justify-center bg-[#080808] overflow-hidden backface-hidden  ">


      <p className="element text-nowrap text-white/70 tracking-[0.35em] z-5 text-xs md:text-sm uppercase mb-16 absolute top-[30%] left-1/2 md:left-1/3 -translate-x-1/2"></p>

      <div className="grain-overlay pointer-events-none" />

      <div
        className="no-select absolute top-0 bottom-20 w-full h-full z-4  blur-[120px] bg-[#111214]/50 opacity-20"
      />

      <div className=" pointer-events-none w-full h-screen opacity-70 image ">

        <img
          src="/portfolioImgs/heroSectionImg.png"
          className="no-select w-full h-full object-cover object-[-650px] sm:object-top-right md:object-top-center "
        />

      </div>


      <div className="absolute bottom-15 sm:bottom-5 md:left-25 flex flex-col gap-6 md:gap-0  ">

        <h1 className="brand-name select-none   opacity-0 font-bold  tracking-tight text-[17vw] md:text-[8rem] lg:text-[11rem] z-20">
          ABHILASH

        </h1>
        <div className="relative -top-8  z-20 mx-auto hero-animate-text opacity-0">
          <div className="flex gap-4 text-white/40">
            <MoveUpRight size={20} className="mt-1 relative top-4 -left-1" />
            <p className="text-xs md:text-sm font-light uppercase tracking-widest leading-loose">
              Not just animations — <br />
              <span className="text-white">I build systems behind them</span>
            </p>
          </div>
        </div>

      </div>




      <div className="w-full h-[20vh] flex justify-between z-40  absolute left-0 bottom-4 items-center px-15">
        
        <Resume className="hidden hero-animate-text opacity-0 md:flex "/>

      <MagneticCircle className="bg-transparent hero-animate-text opacity-0 border border-white/90 
      hover:backdrop-blur-md group  z-10 hidden md:flex flex-col ">


        <span className="text-white group-hover:text-black text-xs font-[Montserrat] z-10 uppercase ">Scroll</span>
        <div className=" w-[0.5px] h-10 bg-white group-hover:bg-black pointer-events-none mt-1
        z-10 " />
        <span className='bg-white w-full h-full absolute top-0 translate-x-full rounded-full group-hover:translate-0 transition-all duration-300' /></MagneticCircle>
        </div>


    </section>

  </>
  )
}

export default HeroSection