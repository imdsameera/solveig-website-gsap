import {CallToAction, Footer, SpinningBadge} from '../../components';
import { ReactLenis } from "lenis/react";
import {Heading, Projects} from './sections';

const Work = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen w-full font-display">
        <SpinningBadge/>
        <Heading/>
          <Projects/>
          <CallToAction/>
        <Footer />
      </div>
    </ReactLenis>
  );
};
export default Work;
