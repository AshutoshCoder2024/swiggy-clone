export default function Menuinfocard({ menuitems }) {
  // console.log(menuitems);
  return (
    <div className="w-full flex justify-between   ">
      <div className="max-w-[70%]">
        <p className="mb-1">{menuitems?.name}</p>
        <p className="mb-1">{"₹"+menuitems?.defaultPrice/100 }</p>
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
        <span>{menuitems?.ratings?.aggregatedRating?.rating}</span>
        <span>
          {"(" + menuitems?.ratings?.aggregatedRating?.ratingCount + ")"}
        </span>
        </div>
        <p className="mb-1">{menuitems?.description}</p>
      </div>
      <div className="max-w-[20%] relative">
        <img
          className="max-w-full w-40 h-36 object-cover "
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            menuitems?.imageId
          }
        ></img>
        <button className="absolute left-0 bottom-0">ADD</button>
      </div>
    </div>
  );
}
