import { Footer, Navbar } from "../../components";
import { ReactLenis } from "lenis/react";

const Work = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen w-full font-display">
        <section className="page-padding">
          <h1>Work Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            quidem, sequi. At distinctio fugit illum impedit maiores, pariatur
            porro possimus.
          </p>
        </section>
        <Footer />
      </div>
    </ReactLenis>
  );
};
export default Work;
