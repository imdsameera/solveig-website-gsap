import React from "react";
import { InfiniteMarquee } from "../../../components/animations";
import { logos } from "../../../constants";

const Clients = () => {
  return (
    <section className="page-padding bg-white">
      <div>
        <div className="home-clients-grid grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-16">
          <div className="w-full flex items-center justify-start gap-2 col-span-1">
            <div className="w-16 h-px bg-black" />
            <h2 className='uppercase tracking-wider font-medium'>My Clients</h2>
          </div>
          <div className="w-full col-span-3">
            <InfiniteMarquee duration={10} direction="left" gap="8rem">
              {logos.map((logo, i) => (
                <div key={i} className=' w-32 h-16 flex items-center justify-center'>
                  <img src={logo.path} alt={logo.id} />
                </div>
              ))}
            </InfiniteMarquee>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Clients;
