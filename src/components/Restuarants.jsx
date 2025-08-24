import { useEffect, useState } from "react";
import { Restuarant_card } from "./Restuarantcard";
import Shimmer from "./shimmer";
import FoodOption from "./FoodOption";
export default function Restuarant() {
  const [RestuarantData, setRestuarantData] = useState([]);

  // fetch Restuarant data from api
  useEffect(() => {
    async function FetchData() {
      const proxyserver = "https://cors-anywhere.herokuapp.com/";
      const swiggyApi =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.054039908667727&lng=76.34344674532176&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const response = await fetch(proxyserver + swiggyApi);
      const data = await response?.json();
      // setRestData({data});
      setRestuarantData(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    FetchData();
  }, []);
  
  if (RestuarantData.length === 0) return <Shimmer></Shimmer>;

  return (
    <>
      <div className="MAX-w-[80%] flex flex-wrap  gap-10 container  mx-auto mt-50 ">
        {RestuarantData.map((restinfo) => (
          <Restuarant_card
            key={restinfo?.info?.id}
            restinfo={restinfo}
          ></Restuarant_card>
        ))}
      </div>
    </>
  );
  console.log(RestuarantData);
}
