import { InfiniteMarquee, TextReveal01 } from "../../../components/animations";
import { Button } from "../../../components/ui";
import {useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const items = Array.from({ length: 6 }, () => `Let's work together`);
  const starRef = useRef(null);

  useGSAP(()=>{
    gsap.set(starRef.current, {scale: 0})
    gsap.to(starRef.current, {
      scale: 1,
      duration: 1,
      ease: 'power1.Out',
      scrollTrigger:{
        trigger: starRef.current,
        start: 'top 95%',
        once: true,
        markers: false
      }
    })
  })

  return (
    <section className="bg-white">
      <section className="relative w-full overflow-hidden bg-lemon-600 py-2">
        <InfiniteMarquee duration={12}>
          {items.map((item, i) => (
            <>
              <span>•</span>
              <span
                key={i}
                className="uppercase text-sm tracking-widest font-semibold"
              >
                {item}
              </span>
            </>
          ))}
        </InfiniteMarquee>
      </section>

      <div className="page-padding bg-black text-center flex flex-col items-center justify-center gap-10 py-20 sm:py-32">
        <div className="star-icon">
          <img ref={starRef} src="/icons/icon-star.svg" alt="star icon" />
        </div>
        <div className="content text-white">
          <TextReveal01>
            <h2 className="text-4xl sm:text-6xl lg:text-8xl uppercase font-semibold tracking-wide">
              Let's create <br /> your new brand
            </h2>
          </TextReveal01>
        </div>
        <div className='w-full sm:w-auto'>
          <Button href="/contact" className='w-full'>Contact Me</Button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
