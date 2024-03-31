import TextTypeAnimation from "../utils/typing_text"
import SlideAnimation from "../utils/slide_animation"
import Fuzz from "../utils/fuzz"

export default function About(){
  return(
  <section id="about" className="w-screen h-screen flex flex-col justify-center items-center">
  <div className="p-14 md:p-0 w-full md:w-auto flex flex-col space-y-3 md:space-y-5 font-space">
    <SlideAnimation classes="text-xs md:text-sm text-start" direction="right">So who am I?</SlideAnimation>
    <SlideAnimation direction="right" classes="text-4xl md:text-7xl delay-500 md:flex"><Fuzz element={"span"} text="Sid"/><span>hartha Mazumder</span></SlideAnimation>
    <SlideAnimation direction="right" classes="delay-1000">
      <TextTypeAnimation classes="md:text-xl text-[0.800rem] font-space"
      data-speed="100" text={"FULL STACK WEB DEVELOPER"} />
    </SlideAnimation>
    <SlideAnimation direction="left" classes="md:mt-6 md:w-[720px] w-[290px] delay-1000">
      <span className="md:text-xl text-sm italic font-space">A seasoned wordsmith and coder with 5 years in web development, fluent in HTML, CSS, Javascript, PHP, MySQL, and Node.js. Proficient in Tailwind CSS, React, and WordPress. A BCA graduate who finds harmony in crafting digital experiences and playing guitar.</span>
    </SlideAnimation>
    </div>
  </section>
  )
}
