import React from "react";
import { stats } from "../../../constants";
import {TextReveal01} from "../../../components/animations";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  return (
    <section className="section-home-stats bg-white py-20">
      <div className="page-padding w-full">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat }) => {
	const statValue = String(stat.value ?? "");
	const mainText = statValue.slice(0, -1);
	const lastChar = statValue.slice(-1);
	const deviderRef = React.useRef(null);

	useGSAP(()=>{
		gsap.to(deviderRef.current, {
			width: '100%',
			duration: 1,
			delay: 0,
			ease: 'power4.inOut',
			scrollTrigger:{
				trigger: deviderRef.current,
				start: 'top 75%',
				once: true,
				markers: false
			}
		})
	})

	return (
    <div className="stat-card w-full">
      <div ref={deviderRef} className="w-0 h-px bg-black mb-2" />
      <TextReveal01 delay={0.5}>
        <p className="text-sm uppercase font-semibold tracking-wider mb-2">
          {stat.title}
        </p>
        <h2 className="text-4xl xs:text-5xl sm:text-6xl font-bold">
          {mainText}
          <span className="text-lemon">{lastChar}</span>
        </h2>
      </TextReveal01>
    </div>
  );
};

export default Stats;
