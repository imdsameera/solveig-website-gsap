import React from "react";
import { TextReveal01 } from "../../../components/animations/index.js";
import {Link} from 'react-router-dom';

const SocialMedia = () => {
  return (
    <section className="bg-lemon-600">
      <div className="page-padding">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-10">
          <h2 className="text-4xl font-medium tracking-wide uppercase">
            Follow me
          </h2>
          <div className="socials flex flex-wrap items-center gap-6 sm:gap-10">
            <Link to="/contact">
              <div className="social instagram flex items-center gap-3">
                <div className="w-8 h-px bg-black" />
                <p className="uppercase text-sm font-medium tracking-wide">
                  Instagram
                </p>
              </div>
            </Link>
            <Link to="/contact">
              <div className="social twitter flex items-center gap-3">
                <div className="w-8 h-px bg-black" />
                <p className="uppercase text-sm font-medium tracking-wide">
                  Twitter
                </p>
              </div>
            </Link>
            <Link to="/contact">
              <div className="social Dribble flex items-center gap-3">
                <div className="w-8 h-px bg-black" />
                <p className="uppercase text-sm font-medium tracking-wide">
                  Dribble
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SocialMedia;
