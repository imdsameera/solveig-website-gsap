import {Footer, Navbar} from '../../components';
import {Clients, Contact, Hero, Services, Stats, Work} from './sections';
import { ReactLenis } from "lenis/react";

const HomePage = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen w-full font-display">
        <Hero />
        <Stats />
        <Clients/>
        <Services/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>
    </ReactLenis>
  );
};
export default HomePage;
