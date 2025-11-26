import { Navbar } from "../../components";
import {Clients, Hero, Services, Stats} from './sections';
import { ReactLenis } from "lenis/react";

const HomePage = () => {
  return (
    <ReactLenis root>
      <div className="bg-gray-200 px-8 pt-8 min-h-screen w-full overflow-x-hidden font-display">
        <Navbar />
        <Hero />
        <Stats />
        <Clients/>
        <Services/>
        <section className="min-h-screen"></section>
        <section className="min-h-screen"></section>
        <section className="min-h-screen"></section>
      </div>
    </ReactLenis>
  );
};
export default HomePage;
