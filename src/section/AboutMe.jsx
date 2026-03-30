import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import React, { useRef } from "react"
import { SplitText } from "gsap/SplitText"
import { MoveDownRight, RectangleHorizontal } from "lucide-react"

gsap.registerPlugin(SplitText, ScrollTrigger)

const AboutMe = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const split = new SplitText(".about-text", { type: "words" })

    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      stagger: 0.04,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 90%",
        end: "bottom 60%",
        scrub: 2
      }
    })

    gsap.from(".heading", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".heading",
        start: "top 85%",
      }
    })

    gsap.from(".line", {
      scaleX: 0,
      transformOrigin: "left",
      scrollTrigger: {
        trigger: ".line",
        start: "top 95%",
        end: "bottom 40%",
        scrub: 1
      }
    })

    gsap.from(".about-img", {
      scaleY: 0.65,
      scaleX: 0.65,
      transformOrigin: "center top",
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-img",
        start: "top 95%",
        end: "top 40%",
        scrub: 1,
      
      },
    })

    const paragraphs = gsap.utils.toArray(".about-text2")
    const splits = paragraphs.map((para) => {
      const splitLines = new SplitText(para, { type: "lines" })
      gsap.from(splitLines.lines, {
        y: 40,
        opacity: 0,
        rotateX: -10,
        skewY: 2,
        filter: "blur(10px)",
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: para,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      })
      return splitLines
    })

    return () => {
      split.revert()
      splits.forEach(s => s.revert())
    }
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative scroll-section bg-linear-to-b from-[#08090a] to-[#17181b] overflow-hidden min-h-screen pb- px-4 md:px-12 lg:px-24"
    >
      <div className="w-full mx-auto">
        <div className="w-full md:flex items-start gap-6 mt-12 relative p-1">
          <MoveDownRight size={30} className="text-white/60 mt-2 font-thin absolute top-0 -left-6" />
          <p className="about-text font-[Montserrat] text-xl md:text-3xl text-white/90 leading-tight mt-10 w-full">
         I design and build immersive digital experiences where motion,
          performance, and clean structure come together. My work focuses on
          crafting smooth, premium interfaces with precise animation and
          scalable architecture.
          </p>
        </div>

        <div className="line w-full h-px bg-white/40 mt-8 will-change-transform" />

        <div className="about-content relative z-20 mt-12 flex flex-col md:flex-row items-center justify-center gap-10 xl:gap-16">
          <div className="text-white md:w-[30%] font-[Montserrat]">
            <p className="about-text2  leading-relaxed opacity-80">
Building things for the web — interfaces, interactions, and systems that actually work in the real world.

            </p>
          </div>

          <div className="relative bg-black about-img opacity-90 w-full sm:h-[60vh]  md:w-[50%]  xl:h-[80vh] overflow-hidden will-change-transform rounded-sm">
            <img
              src="/portfolioImgs/aboutImg.png"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="About"
            />
          </div>

          <div className="hidden md:flex md:w-[30%] flex-col items-start gap-4 self-end pb-10">
             <span className="font-[Cinzel] text-white/40 text-sm tracking-widest uppercase">
                Artistic Direction
             </span>
             <p className="text-white/20 text-xs leading-tight">
                Crafting visual narratives through interaction and code.
             </p>
          </div>
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-end mt-16 border-t border-white/10 pt-8">
          <span className="font-[Cinzel] text-white/60 text-lg mt-15 md:mt-0 self-start ">
            Still exploring...
          </span>
          
          <div className="text-white w-full md:w-1/2 flex flex-col">
            <h2 className="heading text-xl font-[Montserrat] font-bold tracking-tighter mb-4 text-white/90">
              WHAT I FOCUS ON
            </h2>
            <p className="about-text2 text-white/70 font-[Montserrat] tracking-wide leading-relaxed">
I mainly work with the MERN stack, building responsive
layouts, reusable components, and backend APIs for web
applications. Recently I’ve also been experimenting with GSAP,
creating scroll-based animations and interactive UI sections
to make websites feel more dynamic.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe