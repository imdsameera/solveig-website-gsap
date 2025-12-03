import React, { useRef } from "react";
import { services } from "../../../constants";
import { TextReveal01 } from "../../../components/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const starRef = useRef(null);
  const MagneticContainerRef = useRef(null);

  useGSAP(() => {
    gsap.set(starRef.current, { scale: 0 });
    gsap.to(starRef.current, {
      scale: 1,
      duration: 1,
      ease: "power1.Out",
      scrollTrigger: {
        trigger: starRef.current,
        start: "top 95%",
        once: true,
        markers: false,
      },
    });
  });

  return (
    <section className="section-home-services z-900 sm:flex justify-center bg-white">
      <div className="page-padding py-25 w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="col-left sm:w-full flex flex-col sm:justify-between gap-16">
            <div className={`md:sticky top-8 z-900 md:mb-35`}>
              <div className="mb-3">
                <img ref={starRef} src="/icons/icon-star.svg" alt="star icon" />
              </div>
              <div>
                <h2 className="text-6xl font-semibold uppercase">
                  <TextReveal01>
                    <div>Brand</div>
                  </TextReveal01>
                  <TextReveal01>
                    <div>Services</div>
                  </TextReveal01>
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <img
                src="/images/fynn-thumbnail.webp"
                alt="avatar"
                className="w-25"
              />
              <div>
                <h2 className="uppercase text-2xl font-medium">Finn Sølveig</h2>
                <p className="uppercase text-md tracking-wide font-normal">
                  Brand Designer
                </p>
              </div>
            </div>
          </div>
          <div className="col-right w-full">
            <div className="service-cotainer flex flex-col justify-center gap-10">
              {services.map((service, i) => (
                <div
                  key={service.id}
                  className={`w-full border-t-[2rem] border-white sticky top-0 ${i < 1 && "-mt-8"} ${i > services.length - 1 && "mb-8"} z-900`}
                >
                  <div className="service-card w-full bg-gray-100 p-8">
                    <h2 className="uppercase text-4xl font-medium flex items-center gap-3 mb-3">
                      <span>
                        <img src="/icons/icon-star.svg" alt="" />
                      </span>
                      {service.title}
                    </h2>
                    <p className="font-sans text-lg">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
