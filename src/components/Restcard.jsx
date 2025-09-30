export default function RestCard({ RestData }) {
  return (
    <>
      <div className="flex-none shadow shadow--500 border-red-100 border-1 ml-1    rounded-3xl mb-[5px]">
        {/* <a href={RestData?.cta?.link} target="_blank"> */}
        <a href={""} target="_blank">
          {/* img and name rating  */}
          <div className="relative">
            <img
              className="w-78 h-48 object-cover mb-2 rounded-3xl"
              src={
                RestData?.info?.mediaFiles?.[0]?.url
                  ? "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    RestData.info.mediaFiles[0].url
                  : "https://via.placeholder.com/300x200?text=No+Image"
              }
              alt={RestData.info.name}
            />
            <p className="  absolute left-5 bottom-2  text-white font-bold  z-10">
              {RestData?.info?.name}
            </p>
            <p className=" absolute right-5 bottom-2  text-white    font-bold  z-10  ">
              {" "}
              {RestData?.info?.rating.value + ""}
            </p>
            <div className="h-12 w-full  left-0  bottom-0 right-0  bg-gradient-to-t from-black to-transparent    absolute "></div>
          </div>

          {/* details  */}
          <div className=" relatiev flex flex-col w-[]    ">
            {/* type and price  */}
            <div className="flex  relative px-2  mx-2">
              <p className=" text-[#02060C99] text-[13px]  absolute left-0 ">
                {" "}
                {RestData?.info?.cuisines[0] +
                  " • " +
                  RestData?.info?.cuisines[1]}
              </p>
              <p className="  text-[#02060C99] text-[13px]      absolute right-0">
                {RestData.info.costForTwo}
              </p>
            </div>

            {/* location amd distance */}
            <div className="flex relative px-2 mx-2 mt-6 ">
              <p className="  text-sm  absolute left-0 text-[#02060C99] text-[13px] ">
                {RestData?.info?.locality +
                  "," +
                  RestData?.info?.locationInfo?.city?.name}
              </p>
              <p className="  text-sm  absolute right-0 text-[#02060C99] text-[13px] ">
                {RestData?.info?.locationInfo?.distanceString}
              </p>
            </div>

            {/* table booking  */}
            <div className=" mt-2  ml-3 bg-[#F0F0F5] w-28 px-2 py-1/2 text-[12px] rounded-2xl  flex gap-1 justify-center items-center mt-6">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png"
                className="h-3 w-3"
                alt=""
              />
              Table Booking
            </div>

            {/* flat discount  */}
            <div className="flex w-[90%] ml-3 bg-[#1BA672] text-[#FFFFFF] items-center px-5  py-1 rounded-sm mt-3  ">
              <div>
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
                  className="w-5 h-5"
                ></img>
              </div>
              <div>
                {RestData?.info?.offerInfoV2?.otherOffers?.offers[0]?.header}
              </div>
              <div></div>
            </div>

            {/* bank offer  */}
            <div className="flex w-[90%] ml-3 bg-[#C8F9E5] text-[#1BA672] items-center px-5  py-1 rounded-sm mt-3 mb-3    ">
              {RestData?.info?.customerOffer?.info?.description.replace(
                /^\+\s*/,
                ""
              )}
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
