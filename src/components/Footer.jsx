import { navLinks } from "../constants";
import { Button } from "./ui/index.js";

const Footer = () => {
  return (
    <section>
      {/*  Footer top*/}
      <div className="page-padding bg-black">
        <div className="footer-top py-20 ">
          <div className="footer-grid grid gap-10 grid-cols-3 text-white ">
            <div className="logo col-span-3 lg:col-span-1">
              <img src="/solveig_logo_light.svg" alt="solveig logo" />
            </div>
            <div className="links col-span-3 lg:col-span-2">
              <div className="grid grid-cols-2 gap-12 sm:gap-8">
                <div className="pages col-span-2 sm:col-span-1">
                  <h2 className="uppercase text-md font-medium tracking-wider mb-6">
                    pages
                  </h2>
                  <div className="footer-nav-links flex flex-col items-start gap-4">
                    {navLinks.map((item, i) => (
                      <a
                        href={item.link}
                        key={i}
                        className="uppercase text-sm font-medium text-gray-500 tracking-wider"
                      >
                        {item.title}
                      </a>
                    ))}
                    <div className="btn">
                      <Button className="">more templates</Button>
                    </div>
                  </div>
                </div>
                <div className="utility-pages col-span-2 sm:col-span-1">
                  <h2 className="uppercase text-md font-medium tracking-wider mb-6">
                    utility pages
                  </h2>
                  <div className="footer-nav-links flex flex-col gap-4">
                    <a
                      href="/"
                      className="uppercase text-sm font-medium text-gray-500 tracking-wider"
                    >
                      404 error page
                    </a>
                    <a
                      href="/"
                      className="uppercase text-sm font-medium text-gray-500 tracking-wider"
                    >
                      password protected
                    </a>
                    <a
                      href="/"
                      className="uppercase text-sm font-medium text-gray-500 tracking-wider"
                    >
                      styleguide
                    </a>
                    <a
                      href="/"
                      className="uppercase text-sm font-medium text-gray-500 tracking-wider"
                    >
                      liscennce
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Footer bottom*/}
      <div className="page-padding bg-black flex flex-col items-center justify-center py-8">
        <div className="footer-bottom text-xs text-gray-400 font-medium tracking-widest uppercase flex flex-wrap items-center justify-center gap-2  sm:gap-3 md:gap-4">
          <span>&copy; developed by</span>
          <a
            href="https://www.imsameera.com"
            target={"_blank"}
            className="text-white underline"
          >
            sameera lakshan
          </a>
          <span>powered by GSAP</span>
        </div>
      </div>
    </section>
  );
};
export default Footer;
