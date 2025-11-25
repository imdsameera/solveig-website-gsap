import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const Hero = () => {
  const marqueeItems = [
    "Branding • Logo Design • Social Media • ",
    "Branding • Logo Design • Social Media • ",
    "Branding • Logo Design • Social Media • ",
  ];

  const marqueeContainerRef = useRef(null);
  const marqueeTrackRef = useRef(null);
  const heroTextRef = useRef(null);

  useGSAP(()=>{
      gsap.from(heroTextRef.current,{
          yPercent: 100,
          opacity: 0,
          duration: 1,
          ease: 'power4.in'
      })
  })

  // Run a GSAP marquee animation that slides content from right to left infinitely
  useEffect(() => {
    const track = marqueeTrackRef.current;
    if (!track) return;

    // The track contains two copies of the items, so half of the scrollWidth is one full loop width
    const loopWidth = track.scrollWidth / 2;

    // Animate the track continuously from 0 to -loopWidth, then repeat forever
    const tween = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -loopWidth,
        ease: 'none',
        duration: 15, // adjust to control speed (higher = slower)
        repeat: -1,
      }
    );

    // Clean up on unmount
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section className="w-full bg-white page-padding min-h-screen">
      <div>
        <img ref={heroTextRef} src="/images/heroText.png" alt="Hero Text" />
        <h1
          className="font-display font-semibold text-xl
			 sm:text-3xl md:text-4xl uppercase"
        >
          Brand designer from berlin
        </h1>
      </div>
      <div className='w-full pt-8'>
        {/* Marquee: container with overflow hidden and an inner track that slides left */}
        <section ref={marqueeContainerRef} className="relative w-full overflow-hidden bg-lemon-600 py-2">
          <div
            ref={marqueeTrackRef}
            className="flex items-center gap-4 whitespace-nowrap"
            style={{ willChange: 'transform' }}
          >
            {/* Duplicate content twice for a seamless loop */}
            {[...Array(2)].map((_, copyIdx) => (
              <div key={copyIdx} className="flex items-center gap-4">
                {marqueeItems.map((item, i) => (
                  <div key={`${copyIdx}-${i}`} className='uppercase text-sm tracking-widest font-semibold'>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

      {/*Hero Image*/}
          <div className="hero-img-wrapper">
              <img src="/images/home-hero.webp" alt="home hero"/>
          </div>
      </div>
    </section>
  );
}

export default Hero;
