import RestMenuCard from "./RestMenucard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function RestuarantMenu() {
  const { id } = useParams();
  const [restmenudata, setrestmenudata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyserver = "https://cors-anywhere.herokuapp.com/";
      const swiggyApi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3440997&lng=85.309562&restaurantId=${id}`;
      const response = await fetch(proxyserver + swiggyApi);
      const data = await response.json();
      const tempData =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      let filterData = [];
      if (Array.isArray(tempData)) {
        filterData = tempData.filter((items) => "title" in items?.card?.card);
      } else {
        console.warn("Unexpected menu data structure:", data);
      }
      setrestmenudata(filterData);
    }
    fetchData();
  }, []);
  // console.log(restmenudata);

  return (
    <div className="max-w-[80%] m-auto MAX-w-[80%] gap-10 container  mx-auto mt-50 ">
      {restmenudata.map((data) => (
        <RestMenuCard
          key={data?.card?.card?.title}
          menudata={data?.card.card}
        ></RestMenuCard>
      ))}
    </div>
  );
}
