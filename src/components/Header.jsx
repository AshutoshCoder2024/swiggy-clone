import swigy_logo from "../photos/Swiggy_logo_bml6he.png";
import { Link } from "react-router";
import Restuarant from "./Restuarants";

export default function Header() {
  return (
    <header className="bg-[#ff5200] font-serif py-6">
      {/* first row  */}
      <div className="flex justify-between  container max-auto items-center p-4 border-b  max-w-[100%] border-white  ">
        <img className="w-40 v-12" src={swigy_logo}></img>
        <div className="text-white font-bold text-sm flex gap-19 items-center">
          <a href="https://www.swiggy.com/corporate/" target="_blank">
            Swigy Corporate{" "}
          </a>
          <a href="https://www.swiggy.com/corporate/" target="_blank">
            Patner with us{" "}
          </a>
          <a
            className="border  py-3 px-4   rounded-[50px]"
            href="https://www.swiggy.com/corporate/"
            target="_blank"
          >
            Get the App{" "}
          </a>
          <a
            className=" text-amber-50 bg-black border border-black py-3 px-4  rounded-2xl   "
            href="https://www.swiggy.com/corporate/"
            target="_blank"
          >
            Sign in{" "}
          </a>
        </div>
      </div>

      {/* Secong row  */}
      <div className=" pt-16 pb-8   relative  ">
        <img
          className="h-110 w-60 absolute top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        ></img>
        <img
          className="h-110 w-60  absolute top-0 right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        ></img>
        <div className="max-w-[60%]  text-4xl  font-bold text-white   container mx-auto  text-center ">
          Order Food and groceries. Discover best restaurants. Swiggy it!
        </div>

        {/* inputs locat */}
        <div className="  max-w-[70%]  container mx-auto   text-center flex gap-15 mt-12">
          <div className="relative w-[35%]">
            <input
              className=" pl-10 w-full text-xl bg-white py-4 px-6 rounded-2xl pr-12"
              placeholder="Ranchi,   India"
            />
            <img
              src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              alt="location icon"
            />
          </div>

          <div className="relative w-[50%] ">
            <input
              className="  w-full text-xl  bg-white  py-4 px-6 rounded-2xl pr-12 left-10 "
              placeholder="Search for restaurant and items for more "
            />
            <img
              src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
              className="w-7 h-7 absolute right-3 bottom-4  "
            ></img>
          </div>
        </div>
      </div>

      {/* Third img   */}
      <div className="max-w-[80%] flex  container mx-auto">
        <Link to="/restuarant">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
        </Link>
 
        <a
          href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"
          target="_blank"
        >
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
        </a>
        <a href="https://www.swiggy.com/dineout" target="_blank">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
        </a>
        <a href="https://www.swiggy.com/genie" target="_blank">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
        </a>
      </div>
    </header>
  );
}
