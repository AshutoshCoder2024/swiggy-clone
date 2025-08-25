// thisis responsible for whnne i opne any brand like pizzahurt etc then recomended and inside all the food and for veg non veg 

import { useState } from "react";
import MenuinfoCard from "./Menuinfocard";

export default function RestMenuCard({ menudata, foodselected }) {
  // console.log(menudata);


  // as some data have categories so we have to also handle it 
  if ("categories" in menudata) {
    return (
      <div className="w-full">
        <p>{menudata?.title}</p>
        <div>
          {
            menudata?.categories?.map((items) => <RestMenuCard key={items?.title} menudata={items} foodselected={foodselected}></RestMenuCard>)
          }
        </div>
      </div>
    )
  }



  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menudata?.title}</p>
          <button className="text-2xl font-bold relative right-2 " onClick={() => setIsOpen(!isOpen)}> {isOpen ? '^' : 'v'} </button>
        </div>
        <div className="h-4  bg-gray-200 mt-2 mb-2"></div>
      </div>
    )
  }



  // this is for show only veg items
  if (foodselected === 'veg') {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menudata?.title}</p>
          <button className="text-3xl " onClick={() => setIsOpen(!isOpen)}> {isOpen ? '^' : 'v'} </button>
        </div>
        <div>
          {menudata?.itemCards?.filter((food) => "isVeg" in food?.card?.info).map((items) => (
            <MenuinfoCard
              key={items?.card?.info?.id}
              menuitems={items?.card?.info}
            />
          ))}

        </div>

      </div>
    )
  }

  // this is for show only Non-veg items when non veg  button is clicked 
  if (foodselected === 'Non-veg') {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menudata?.title}</p>
          <button className="text-3xl " onClick={() => setIsOpen(!isOpen)}> {isOpen ? '^' : 'v'} </button>
        </div>
        <div>
          {menudata?.itemCards?.filter((food) => !("isVeg" in food?.card?.info)).map((items) => (
            <MenuinfoCard
              key={items?.card?.info?.id}
              menuitems={items?.card?.info}
            />
          ))}

        </div>

      </div>

    )
  }


  // it is default for both 
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menudata?.title}</p>
          <button className="text-3xl " onClick={() => setIsOpen(!isOpen)}> {isOpen ? '^' : 'v'} </button>
        </div>
        <div>
          {menudata?.itemCards?.map((items) => (
            <MenuinfoCard
              key={items?.card?.info?.id}
              menuitems={items?.card?.info}
            />
          ))}

        </div>

      </div>
    </>
  );
}
