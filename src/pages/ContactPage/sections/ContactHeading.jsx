import React from "react";
import { Button } from "../../../components/ui";
import { TextReveal01 } from "../../../components/animations";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const ContactHeading = () => {
  const lineRef = React.useRef(null);
  useGSAP(()=>{
    gsap.from(lineRef.current, {
      duration: 0.5,
      ease: 'power1.Out',
      width: '0',
      scrollTrigger:{
        trigger: lineRef.current,
        start: 'top 95%',
        once: true,
        markers: false
      }
    })
  })

  return (
    <section className="section-contact-heading bg-white">
      <div className="page-padding">
        <div className="py-20">
          <div className="w-full flex flex-col gap-10 md:flex-row">
            {/*Header*/}
            <div className="header w-full">
              <div className="eye-brow-text flex items-center gap-3 mb-4">
                <div ref={lineRef} className="w-8 h-px bg-black" />
                <TextReveal01 delay={0.5}>
                  <p className="uppercase text-xs font-medium tracking-wide">
                    Contact
                  </p>
                </TextReveal01>
              </div>

              <TextReveal01 delay={0.5}>
                <h1 className="text-4xl sm:text-6xl lg:text-8xl uppercase font-semibold tracking-wide mb-16">
                  Get in Tou&shy;ch.
                </h1>
              </TextReveal01>
              <div className="flex items-center gap-6">
                <img
                  src="/images/fynn-thumbnail.webp"
                  alt="avatar"
                  className="w-25"
                />
                <div>
                  <TextReveal01 delay={0.5} startFrom={95}>
                    <h2 className="uppercase text-2xl font-medium">
                      Finn Sølveig
                    </h2>
                  </TextReveal01>
                  <TextReveal01 delay={0.5} startFrom={95}>
                    <p className="uppercase text-md tracking-wide font-normal">
                      Brand Designer
                    </p>
                  </TextReveal01>
                </div>
              </div>
            </div>

            {/*Form*/}
            <div className="contact-form w-full md:px-10">
              <form
                className="w-full flex flex-col items-start justify-center gap-6"
                action="#"
              >
                <div className="form-field-wrapper w-full">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border-2 border-black p-4 focus:bg-gray-100 outline-none w-full"
                  />
                </div>
                <div className="form-field-wrapper w-full">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border-2 border-black p-4 focus:bg-gray-100 outline-none w-full"
                  />
                </div>
                <div className="form-field-wrapper w-full">
                  <textarea
                    name="message"
                    id="contact-message"
                    cols="30"
                    rows="6"
                    placeholder="You Message"
                    className="border-2 border-black p-4 focus:bg-gray-100 outline-none w-full"
                  />
                </div>
                <div className="w-auto flex items-start">
                  <Button size="md" variant="secondary">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactHeading;
