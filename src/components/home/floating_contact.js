import { FaLinkedin,FaFacebook,FaGithub } from "react-icons/fa";
import SlideAnimation from "../utils/slide_animation"

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
        href="https://www.facebook.com/profile.php?id=100025904865040"
        className="hover:text-liberty-400"
      >
	  <FaFacebook/>
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
