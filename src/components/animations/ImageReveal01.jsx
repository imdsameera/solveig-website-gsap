import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// as the TextReveal01, this component reveals images inside a wrapper using GSAP
// API mirrors TextReveal01: animateOnScroll (default true) and delay (seconds)
const ImageReveal01 = ({ children, animateOnScroll = true, delay = 0, stagger = 0.12 }) => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Collect all images within the wrapper
      const imgs = Array.from(container.querySelectorAll('img'));
      imagesRef.current = imgs;

      if (imgs.length === 0) return;

      // Ensure each image is inside an overflow-hidden wrapper so it reveals from a mask
      imgs.forEach((img) => {
        const parent = img.parentElement;
        const alreadyWrapped = parent && parent.hasAttribute('data-image-mask-wrapper');
        if (!alreadyWrapped) {
          const wrapper = document.createElement('div');
          wrapper.setAttribute('data-image-mask-wrapper', 'true');
          Object.assign(wrapper.style, {
            overflow: 'hidden',
            display: 'block',
            position: 'relative',
            lineHeight: '0',
          });
          parent.insertBefore(wrapper, img);
          wrapper.appendChild(img);
        }
      });

      // Prepare initial state: translate upward from bottom (inside mask), no opacity/scale
      gsap.set(imgs, {
        yPercent: 100,
        willChange: 'transform',
        display: 'block', // avoid inline-img baseline gaps
      });

      const animationProps = {
        yPercent: 0,
        duration: 1.1,
        ease: 'power4.out',
        stagger,
        delay,
        clearProps: 'willChange',
      };

      if (animateOnScroll) {
        gsap.to(imgs, {
          ...animationProps,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            once: true,
          },
        });
      } else {
        gsap.to(imgs, animationProps);
      }

      // Cleanup: unwrap images and clear inline styles
      return () => {
        imgs.forEach((img) => {
          // remove transform styles that we set
          img.style.transform = '';
          img.style.willChange = '';
          img.style.display = '';

          const parent = img.parentElement;
          if (parent && parent.hasAttribute('data-image-mask-wrapper')) {
            const grand = parent.parentElement;
            if (grand) {
              grand.insertBefore(img, parent);
              grand.removeChild(parent);
            }
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay, stagger] }
  );

  return (
    <div ref={containerRef} data-image-reveal-wrapper="true">
      {children}
    </div>
  );
};

export default ImageReveal01;
