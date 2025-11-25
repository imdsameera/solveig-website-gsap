import { navLinks } from "../constants";
import { Button } from "./ui";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const topLineRef = useRef(null);
  const middleLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const drawerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true }).from(drawerRef.current, {
      duration: 0.3,
      y: 50,
      opacity: 0,
    });

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(middleLineRef.current, {
        width: 0,
        duration: 0.5,
        ease: "power2.in",
      })
      .to(
        topLineRef.current,
        {
          rotation: 45,
          y: 10,
          duration: 0.3,
          ease: "power2.out",
        },
        "+=0.1",
      )
      .to(
        bottomLineRef.current,
        {
          rotation: -45,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        },
        "<",
      );
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
      tl.current.play();
      iconTl.current.play();
    } else {
      tl.current.reverse();
      iconTl.current.reverse();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-center bg-white page-padding">
      <div className="flex items-center justify-between w-full  py-6">
        <a href="/">
          <img src="/solveig_logo.svg" alt="" className="cursor-pointer" />
        </a>

        {/*  Desktop Nav*/}
        <div
          id="desktop-nav"
          className="hidden sm:flex items-center justify-center gap-8 font-medium"
        >
          <nav className="flex items-center justify-center gap-6">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-black text-sm font-medium uppercase tracking-wider group"
              >
                {item.title}{" "}
                <div className="w-0 group-hover:w-full h-[1.5px] bg-black transition-all ease-in-out duration-300" />
              </a>
            ))}
          </nav>
          <Button>Get free template</Button>
        </div>

        {/*  Hamburger Icon*/}
        <div
          id="hamburger"
          className="sm:hidden flex flex-col items-end gap-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <div ref={topLineRef} id="line-1" className="w-10 h-0.5 bg-black" />
          <div
            ref={middleLineRef}
            id="line-1"
            className="w-10 h-0.5 bg-black"
          />
          <div
            ref={bottomLineRef}
            id="line-1"
            className="w-10 h-0.5 bg-black"
          />
        </div>
      </div>
      {/*  Mobile Drawer*/}
      <div
        ref={drawerRef}
        className="absolute top-full w-full px-8 sm:hidden z-999"
      >
        <div
          id="mobile-drawer"
          className="flex flex-col gap-4 w-full p-8 bg-black"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-white hover:text-white/60 text-sm font-medium uppercase tracking-wider group"
              >
                {item.title}{" "}
              </a>
            ))}
          </nav>
          <Button>Get free template</Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
