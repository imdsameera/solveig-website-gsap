import {Footer, CallToAction, SpinningBadge} from '../../components';
import {Clients, Hero, Services, Stats, Work} from './sections';
import { ReactLenis } from "lenis/react";

const HomePage = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen w-full font-display">
        <SpinningBadge/>
        <Hero />
        <Stats />
        <Clients/>
        <Services/>
        <Work/>
        <CallToAction/>
        <Footer/>
      </div>
    </ReactLenis>
  );
};
export default HomePage;
