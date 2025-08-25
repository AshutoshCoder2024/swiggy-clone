import RestMenuCard from "./RestMenucard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function RestuarantMenu() {
  const { id } = useParams();
  const [restmenudata, setrestmenudata] = useState([]);
  const [Selected,setSelected]=useState(null);

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
    <>
    {/*  veg and non-veg  */}
    <div className="mb-10 mt-30 ml-40">
      <button className={`text-xl px-8 py-2 mr-4 border rounded-2xl  ${Selected==="veg"?"bg-green-600":"bg-gray-300"}`}   onClick={()=> setSelected(Selected==="veg"?"null":"veg")} >Veg</button>
      <button className={`text-xl px-4 py-2  border rounded-2xl  ${Selected==="Non-veg"?"bg-red-500":"bg-gray-300"}`} onClick={()=> setSelected(Selected==="Non-veg"?"null":"Non-veg")} >Non-Veg</button>
    </div>
    <div className="max-w-[80%] m-auto MAX-w-[80%] gap-10 container  mx-auto mt-20 ">

      {restmenudata.map((data) => (
        <RestMenuCard
          key={data?.card?.card?.title}
          menudata={data?.card.card}
          foodselected={Selected}
        ></RestMenuCard>
      ))}
    </div>
    </>

    
  );
}
