import {Footer, Navbar} from '../../components';
import {Clients, Contact, Hero, Services, Stats, Work} from './sections';
import { ReactLenis } from "lenis/react";

const HomePage = () => {
  return (
    <ReactLenis root>
      <div className="bg-gray-200 px-8 pt-8 min-h-screen w-full font-display">
        <Navbar />
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
