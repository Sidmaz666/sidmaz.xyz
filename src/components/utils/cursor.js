export default function Cursor() {
  const cursorHTML = `
  <div
      class=" w-[40px] h-[40px]
      hidden lg:flex justify-center items-center
      rounded-full mix-blend-screen
      fixed pointer-events-none
      z-[9999]"
      id="custom-cursor">

    <div class="relative flex justify-center items-center">
    	<div class="w-[200px] h-[200px] bg-smoky-black-700 blur-[100px] rounded-full opacity-[50%]
	  flex justify-center items-center z-[9990] absolute ">
	</div>
    </div>
  </div>
`;

  document.body.insertAdjacentHTML("beforeend", cursorHTML);
  const cursor = document.querySelector("#custom-cursor");
  cursor.style.display = "none"
 
  document.addEventListener("mousemove", (e) => {
    cursor.style.display = ""
    cursor.style.left = e.clientX - 15 + "px";
    cursor.style.top = e.clientY - 15 + "px";
  });
}
