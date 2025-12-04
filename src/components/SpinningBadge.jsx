import {useRef} from 'react';
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import {useGSAP} from '@gsap/react';

// Ensure the ScrollTrigger plugin is registered
gsap.registerPlugin(ScrollTrigger);

const SpinningBadge = () => {
	const badgeRef = useRef(null);

	useGSAP(()=>{
		// Spin the badge smoothly as the page scrolls.
		// The animation scrubs from the very top of the page to the very bottom,
		// completing exactly 180deg rotation by the time the user reaches the bottom.
		const tween = gsap.to(badgeRef.current, {
			rotation: 180,
			ease: 'none',
			scrollTrigger: {
				// Use the document itself as the trigger to cover the whole page scroll
				trigger: document.documentElement,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
				markers: false,
			}
		});

		return () => {
			if (tween.scrollTrigger) tween.scrollTrigger.kill();
		};
	})

  return (
    <div className="banner-circle-wrapper fixed bottom-0 right-0 z-900 m-8">
      <Link to='/'>
        <img ref={badgeRef} src="/icons/spinningBadge.svg" alt="" className="will-change-transform" />
      </Link>
    </div>
  );
};
export default SpinningBadge;
