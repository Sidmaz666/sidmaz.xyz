import { FaLinkedin,FaGithub } from "react-icons/fa";
import SlideAnimation from "../utils/slide_animation"
import {FaXTwitter} from "react-icons/fa6";

export default function FloatingContact() {
  return (
    <SlideAnimation direction="left" classes="fixed top-3 right-3 text-2xl p-2 z-40 flex space-x-3 items-center">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/sidhartha-mazumder/"
        className="hover:text-liberty-400"
      >
	  <FaLinkedin/>
      </a>
      <a
        target="_blank"
        href="https://twitter.com/Sidmaz666"
        className="hover:text-liberty-400"
      >
	  <FaXTwitter/>
      </a>
      <a
        target="_blank"
        href="https://github.com/Sidmaz666?tab=repositories"
        className="hover:text-liberty-400"
      >
	  <FaGithub/>
      </a>
    </SlideAnimation>
  );
}
