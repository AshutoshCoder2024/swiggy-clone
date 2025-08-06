import { DineoutRestData } from "../Utils/Dineout";
import RestCard from "./Restcard";

export default function RestOption() {
  return (
    <>
      <div className="w-[80%] container mx-auto mt-10 mb-10">
        <p className="font-bold text-3xl mb-5">
          Discover best restaurants on Dineout{" "}
        </p>
        <div className="flex flex-nowrap overflow-x-auto scrollbar-none gap-8 1mb-30    ">
          {DineoutRestData.map((RestData) => (
            <RestCard key={RestData.info.id} RestData={RestData} />
          ))}
        </div>
      </div>
    </>
  );
}
