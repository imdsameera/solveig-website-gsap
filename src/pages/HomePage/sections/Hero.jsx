import {
  TextReveal01,
  ImageReveal01,
  InfiniteMarquee,
} from "../../../components/animations";

const Hero = () => {

  return (
    <section className="section-home-hero w-full bg-white page-padding">
      <div>
        <ImageReveal01 delay={0.5}>
          <img src="/images/heroText.png" alt="Hero Text" />
        </ImageReveal01>
        <TextReveal01 delay={0.5}>
          <h1
            className="font-display font-semibold text-xl
			 sm:text-3xl md:text-4xl uppercase"
          >
            Brand designer from berlin
          </h1>
        </TextReveal01>
      </div>
      <div className="w-full pt-8">
        {/*Marqueee*/}
        <section
          className="relative w-full overflow-hidden bg-lemon-600 py-2"
        >
          <InfiniteMarquee duration={12}>
            <span className="uppercase text-sm tracking-widest font-semibold">
              Branding • Logo Design • Social Media •{" "}
            </span>
            <span className="uppercase text-sm tracking-widest font-semibold">
              Branding • Logo Design • Social Media •{" "}
            </span>
            <span className="uppercase text-sm tracking-widest font-semibold">
              Branding • Logo Design • Social Media •{" "}
            </span>
          </InfiniteMarquee>
        </section>

        {/*Hero Image*/}
        <div className="hero-img-wrapper">
          <img src="/images/home-hero.webp" alt="home hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
