import { imageGridCards } from "../Utils/FoodData";
import Foodcard from "./Foodcard";

export default function FoodOption() {
  return (
      <div className=" max-w-[85%] flex flex-wrap container mx-auto   justify-center  mt-20  gap-3">
        {imageGridCards.map((fooddata) => (
          <Foodcard key={fooddata?.id} fooddata={fooddata}></Foodcard>
        ))}
      </div>
  );
}
