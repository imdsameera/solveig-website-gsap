import { Footer, Navbar, SpinningBadge } from "../../components";
import { ReactLenis } from "lenis/react";
import { ContactHeading, SocialMedia } from "./sections";

const Contact = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen w-full font-display">
        <SpinningBadge />
        <ContactHeading />
        <SocialMedia />
        <Footer />
      </div>
    </ReactLenis>
  );
};
export default Contact;
