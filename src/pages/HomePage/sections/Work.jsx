import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { projects } from "../../../constants";
import { ProjectCard } from "../../../components";

// Ensure ScrollTrigger is registered for smooth scroll-based animations
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const items = Array.from({ length: 6 }, () => "selected work");
  const marqueeItemRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(marqueeItemRef.current, {
      xPercent: -100,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 6, // small catch-up smoothing for a more fluid feel
        markers: false,
      },
    });
  });

  return (
    <section className="bg-white border-t border-black">
      <div
        ref={containerRef}
        className="text-marquee w-full overflow-x-hidden py-6"
      >
        <div
          ref={marqueeItemRef}
          className="flex items-center gap-8 -translate-x-10"
          style={{ willChange: "transform" }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span>■</span>
              <span className="text-3xl sm:text-5xl uppercase font-medium text-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/*PROJECTS*/}
      <div className="work page-padding py-10 sm:py-20">
        <div className="project-gird grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.slice(0, -2).map((project) => (
            <>
              <ProjectCard key={project.id} project={project} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Work;
