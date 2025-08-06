import { Link } from "react-router";
export function Restuarant_card({ restinfo }) {
  return (
    <Link to={"/city/Ranchi/"+restinfo?.info?.id}>
      <div className="max-w-[280px] transform transition duration-200  hover:scale-90 ">
        <img
          className="h-45 w-70 object-cover rounded-2xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            restinfo.info.cloudinaryImageId
          }
        ></img>

        <div className="ml-2 max-w-[95%] h- max-auto container">
          <div className="text-lg  font-bold text-[#02060CEb]">
            {restinfo?.info?.name}
          </div>

          <div className="flex gap-2 items-center">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Green circle */}
              <circle cx="12" cy="12" r="12" fill="#00C800" />

              {/* Bigger white star, perfectly centered */}
              <path
                d="M12 6.5L13.9 10l4.1.6-3 2.9.7 4.1L12 15.7 8.3 17.6l.7-4.1-3-2.9 4.1-.6L12 6.5z"
                fill="#FFFFFF"
              />
            </svg>
            <span className=" text-[#02060CEB]">
              {restinfo?.info?.avgRating}
            </span>
            <span className=" text-[#02060CEB] font-bold">
              {restinfo?.info?.sla?.slaString}
            </span>
          </div>

          <div className="max-w-[200px]  text-[#02060C99] h-12 overflow-hidden">
            {restinfo?.info?.cuisines.join(" ,  ")}
          </div>
        </div>
      </div>
    </Link>
  );
}
