import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function SearchFood() {

    const { id } = useParams();
    const [food, setfood] = useState("");
    const [restdata, setrestdata] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const swiggyApi = `/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3440997&lng=85.309562&restaurantId=${id}`;
            const response = await fetch(swiggyApi);
            const data = await response.json();
            const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            let filterData = [];
            if (Array.isArray(tempData)) {
                filterData = tempData.filter((items) => "title" in items?.card?.card);
            } else {
                console.warn("Unexpected menu data structure:", data);
            }
            setrestdata(filterData);
            console.log(filterData);
        }
        fetchData();

    }, [])
    return (
        <div className="w-[80%] mx-auto mt-20">
            <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl" placeholder="Search here" onChange={(e) => setfood(e.target.value)}></input>
        </div>

    )
}