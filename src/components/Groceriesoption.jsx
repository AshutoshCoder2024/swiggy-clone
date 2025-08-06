import { GrocerGridCard } from "../Utils/groceriesdata";
import Groceriescard from "./Groceriescard";

export default function GroceriesOption() {
  return (
    <div className=" mt-20 w-[80%]   container mx-auto   ">
      <h1 className="text-2xl font-bold ">Shop groceries on Instamart</h1>
      <div className=" flex  flex-nowrap overflow-x-auto   scrollbar-none mt-5 gap-10  ">
        {GrocerGridCard.map((groceriesdata) => (
          <Groceriescard
            key={groceriesdata?.id}
            groceriesdata={groceriesdata}
          ></Groceriescard>
        ))}
      </div>
    </div>
  );
}
