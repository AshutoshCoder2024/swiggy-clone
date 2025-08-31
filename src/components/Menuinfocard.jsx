// this is for all item when i click any restuarent 

import { useState } from "react";
export default function MenuinfoCard({ menuitems }) {
  // console.log(menuitems);
  const [count,setcount]=useState(0)

  return (
    <>
      <div className="w-full flex justify-between  mb-2 pb-2  ">
        <div className="w-[70%]">
          <p className="text-2xl text-gray-700 font-semibold mb-1 ">{menuitems?.name}</p>
          <p className=" text-xl">{"₹"+("defaultPrice" in menuitems ? menuitems?.defaultPrice/100:menuitems?.price/100)}</p>
          <div className="flex gap-2 items-center mb-1">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#00C800" />

              <path
                d="M12 6.5L13.9 10l4.1.6-3 2.9.7 4.1L12 15.7 8.3 17.6l.7-4.1-3-2.9 4.1-.6L12 6.5z"
                fill="#FFFFFF"
              />
            </svg>
            <span className="text-green-700">{menuitems?.ratings?.aggregatedRating?.rating}</span>
            <span>{"("+menuitems?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
          </div>
          <p className="mb-1">{menuitems?.description}</p>
        </div>
        <div className="w-[20%] relative h-42">
          <img
            className="w-60  h-36 object-cover rounded-3xl "
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/"+
              menuitems?.imageId 
            }
          ></img>
          {
            (count==0)?(<button className="absolute  bottom-1  bg-white left-20 rounded-xl text-2xl shadow-md text-green-600 px-4 py-2 border border-white" onClick={()=>setcount(1)}>ADD</button>):(
              <div className=" absolute flex gap-4  bottom-1 left-20 rounded-xl text-2xl bg-white  text-green-600 px-4 py-2 shadow-md border-white"> 
                <button onClick={()=>setcount(count-1)}>-</button>
                <span >{count}</span>
                <button  onClick={()=>setcount(count+1)}>+</button>

                </div>
            )
          }
        </div>
      </div>
      <hr className="mb-4 mt-2"></hr>
    </>
  );
}
