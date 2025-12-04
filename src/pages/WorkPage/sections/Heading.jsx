import React from "react";
import { TextReveal01 } from "../../../components/animations";

const Heading = () => {
  return (
    <section className="section-work-heading bg-white">
      <div className="page-padding">
        <div className="py-30 flex items-center justify-center">
          <TextReveal01 delay={0.5}>
            <h1 className='text-4xl sm:text-6xl lg:text-8xl uppercase font-semibold tracking-wide'>Work</h1>
          </TextReveal01>
        </div>
      </div>
    </section>
  );
};
export default Heading;
