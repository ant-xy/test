import Image from "next/image";
import Lua from "../../Images/Lua-Logo.svg";
import Html_S from "../../Images/317755_badge_html_html5_achievement_award_icon.svg";
import Css_L from "../../Images/4202020_css3_html_logo_social_social media_icon.svg";
import Python from "../../Images/4375050_logo_python_icon.svg";
import JavaScript from "../../Images/4373213_js_logo_logos_icon.svg";
import DDSF from "../../Images/Webp.webp";
import SFG from "../../Images/SFG.webp";
import RSF from "../../Images/RSF.webp";
import DEF from "../../Images/DEF.webp";
import Arrow from "../../Images/arrow.svg";

export default function Home() {
  return (
    <main className="h-screen bg-purple-500 scroll-smooth snap-y snap-mandatory">
      
      <div class="flex flex-col justify-center items-center w-full h-full bg-board snap-start snap-always">
        
        <p class="mb-3.5 text-3xl text-center text-white sm:text-3xl md:text-6xl lg:text-7xl 2xl:text-8xl h-fit">
          hello, i'm{" "}
          <span class="text-6xl font-bold color-text sm:text-3xl md:text-8xl lg:text-9xl 2xl:text-8xl">
            ANT<span class="font-light tracking-tighter text-white">;</span>
          </span>
        </p>
        <p class="mb-10 text-center text-white text-1xl h-fit sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
          a programmer and a developer.
        </p>

        <button class="justify-center w-3/12 h-10 text-2xl mt-[1rem] text-center bg-text text-board rounded-md sm:text-2xl md:text-2xl lg:text-3xl sm:w-2/12 md:w-2/12 lg:w-2/12 aspect-video">
          contact
        </button>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mt-[3rem] text-white animate-pulse size-6 fill-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>

      <div class="grid z-10 grid-cols-12 p-1 sm:p-3 md:p-3 lg:p-10 xl:p-10 2xl:p-10 snap-start snap-always bg-board-light">
        <p class="col-span-full mt-auto mb-auto text-white align-middle text-1xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl sm:col-span-full md:col-span-12 lg:col-span-8 2xl:col-span-8">
          <img
            src={Lua.src}
            class="float-left p-1 w-4/12 rounded-lg sm:visible md:visible lg:hidden xl:hidden 2xl:hidden sm:w-3/12 md:w-3/12 lg:w-full 2xl:w-full aspect-square"
          ></img>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          erat sit amet eros fringilla fermentum. Nunc gravida mi eget sagittis
          mattis. Donec massa lacus, tincidunt in lorem vitae, cursus euismod
          diam. Aenean volutpat quam amet velit. Donec imperdiet luctus dolor ut
          posuere. Etiam rhoncus fringilla dolor et placerat. Donec malesuada
          fames ac turpis egestas. Etiam nunc enim, consequat.{" "}
        </p>

        {/* sm:col-span-full md:col-span-3 lg:col-span-3 2xl:col-span-3 */}
        <div></div>

        <div class="hidden order-last col-span-full content-center sm:col-span-full sm:hidden md:hidden lg:block xl:block 2xl:block md:col-span-12 lg:col-span-3 xl:col-span-3 2xl:col-span-3 h-12/12">
          <img
            src={Lua.src}
            class="mx-auto w-5/12 rounded-lg sm:w-3/12 md:w-3/12 lg:w-full 2xl:w-full aspect-square"
          ></img>
        </div>
      </div> 

      <div class="grid z-10 grid-cols-12 p-1 mt-20 sm:mt-20 md:mg-20 sm:p-3 md:p-3 lg:p-10 xl:p-10 2xl:p-10 snap-start snap-always bg-board-light">
        <p class="col-span-full mt-auto mb-auto text-white text-1xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl sm:col-span-full md:col-span-12 lg:col-span-8 2xl:col-span-8">
          <img
            src={DDSF.src}
            class="float-left p-1 w-4/12 rounded-lg sm:visible md:visible lg:hidden xl:hidden 2xl:hidden sm:w-3/12 md:w-3/12 lg:w-full 2xl:w-full aspect-square"
          ></img>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          erat sit amet eros fringilla fermentum. Nunc gravida mi eget sagittis
          mattis. Donec massa lacus, tincidunt in lorem vitae, cursus euismod
          diam. Aenean volutpat quam amet velit. Donec imperdiet luctus dolor ut
          posuere. Etiam rhoncus fringilla dolor et placerat. Donec malesuada
          fames ac turpis egestas. Etiam nunc enim, consequat.{" "}
        </p>

        {/* sm:col-span-full md:col-span-3 lg:col-span-3 2xl:col-span-3 */}
        <div></div>

        <div class="hidden order-last col-span-full content-center sm:col-span-full sm:hidden md:hidden lg:block xl:block 2xl:block md:col-span-12 lg:col-span-3 xl:col-span-3 2xl:col-span-3 w-12/12">
          <img
            src={DDSF.src}
            class="mx-auto w-5/12 rounded-lg sm:w-3/12 md:w-3/12 lg:w-full 2xl:w-full aspect-square"
          ></img>
        </div>
      </div>

      <div class="grid z-10 grid-cols-12 p-1 mt-20 sm:mt-20 md:mg-20 sm:p-3 md:p-3 lg:p-10 xl:p-10 2xl:p-10 snap-start snap-always bg-board-light">
        <p class="col-span-full mt-auto mb-auto text-white text-1xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl sm:col-span-full md:col-span-12 lg:col-span-8 2xl:col-span-8">
          <img
            src={RSF.src}
            class="float-left p-1 w-4/12 rounded-lg sm:visible md:visible lg:hidden xl:hidden 2xl:hidden sm:w-3/12 md:w-3/12 lg:w-full 2xl:w-full aspect-square"
          ></img>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          erat sit amet eros fringilla fermentum. Nunc gravida mi eget sagittis
          mattis. Donec massa lacus, tincidunt in lorem vitae, cursus euismod
          diam. Aenean volutpat quam amet velit. Donec imperdiet luctus dolor ut
          posuere. Etiam rhoncus fringilla dolor et placerat. Donec malesuada
          fames ac turpis egestas. Etiam nunc enim, consequat.{" "}
        </p>

        {/* sm:col-span-full md:col-span-3 lg:col-span-3 2xl:col-span-3 */}
        <div></div>

        <div class="hidden order-last col-span-full content-center sm:col-span-full sm:hidden md:hidden lg:block xl:block 2xl:block md:col-span-12 lg:col-span-3 xl:col-span-3 2xl:col-span-3 w-12/12">
          <img
            src={RSF.src}
            class="mx-auto w-5/12 rounded-lg sm:w-3/12 md:w-3/12 lg:w-full 2xl:w-full aspect-square"
          ></img>
        </div>
      </div>

      <div class="grid z-10 grid-cols-12 p-1 mt-20 sm:mt-20 md:mg-20 sm:p-3 md:p-3 lg:p-10 xl:p-10 2xl:p-10 snap-start snap-always bg-board-light">
        <p class="col-span-full mt-auto mb-auto text-white text-1xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl sm:col-span-full md:col-span-12 lg:col-span-8 2xl:col-span-8">
          <img
            src={DEF.src}
            class="float-left p-1 w-4/12 rounded-lg sm:visible md:visible lg:hidden xl:hidden 2xl:hidden sm:w-3/12 md:w-3/12 lg:w-full 2xl:w-full aspect-square"
          ></img>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          erat sit amet eros fringilla fermentum. Nunc gravida mi eget sagittis
          mattis. Donec massa lacus, tincidunt in lorem vitae, cursus euismod
          diam. Aenean volutpat quam amet velit. Donec imperdiet luctus dolor ut
          posuere. Etiam rhoncus fringilla dolor et placerat. Donec malesuada
          fames ac turpis egestas. Etiam nunc enim, consequat.{" "}
        </p>

        {/* sm:col-span-full md:col-span-3 lg:col-span-3 2xl:col-span-3 */}
        <div></div>

        <div class="hidden order-last col-span-full content-center sm:col-span-full sm:hidden md:hidden lg:block xl:block 2xl:block md:col-span-12 lg:col-span-3 xl:col-span-3 2xl:col-span-3 w-12/12">
          <img
            src={DEF.src}
            class="mx-auto w-5/12 rounded-lg sm:w-3/12 md:w-3/12 lg:w-full 2xl:w-full aspect-square"
          ></img>
        </div>
      </div>

      <div class="grid z-10 grid-cols-12 p-1 mt-20 sm:mt-20 md:mg-20 sm:p-3 md:p-3 lg:p-10 xl:p-10 2xl:p-10 snap-start snap-always bg-board-light">
        <p class="col-span-full mt-auto mb-auto text-white text-1xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl sm:col-span-full md:col-span-12 lg:col-span-8 2xl:col-span-8">
          <img
            src={SFG.src}
            class="float-left p-1 w-4/12 rounded-lg sm:visible md:visible lg:hidden xl:hidden 2xl:hidden sm:w-3/12 md:w-3/12 lg:w-full 2xl:w-full aspect-square"
          ></img>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          erat sit amet eros fringilla fermentum. Nunc gravida mi eget sagittis
          mattis. Donec massa lacus, tincidunt in lorem vitae, cursus euismod
          diam. Aenean volutpat quam amet velit. Donec imperdiet luctus dolor ut
          posuere. Etiam rhoncus fringilla dolor et placerat. Donec malesuada
          fames ac turpis egestas. Etiam nunc enim, consequat.{" "}
        </p>

        {/* sm:col-span-full md:col-span-3 lg:col-span-3 2xl:col-span-3 */}
        <div></div>

        <div class="hidden order-last col-span-full content-center sm:col-span-full sm:hidden md:hidden lg:block xl:block 2xl:block md:col-span-12 lg:col-span-3 xl:col-span-3 2xl:col-span-3 w-12/12">
          <img
            src={SFG.src}
            class="mx-auto w-5/12 rounded-lg sm:w-3/12 md:w-3/12 lg:w-full 2xl:w-full aspect-square"
          ></img>
        </div>
      </div>
    </main>
  );
}
