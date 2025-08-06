import MenuinfoCard from "./Menuinfocard";

export default function RestMenuCard({ menudata }) {
  console.log(menudata);
  return (
    <div className="w-full flex-col mb-10 gap-200 ">
      <p>{menudata?.title}</p> 
      {menudata?.itemCards?.map((items) => (
        <MenuinfoCard
          key={items?.card?.info?.id}
          menuitems={items?.card?.info}
        />
      ))}
    </div>
  );
 }
   