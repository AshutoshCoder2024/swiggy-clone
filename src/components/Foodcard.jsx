export default function Foodcard({ fooddata }) {
  return (
    <>
      {/* <a href={fooddata?.action?.link}> */}
        <img
          className="max-w-40 h-50 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/"+
            fooddata?.imageId
          }
          alt=""
        />
      {/* </a> */}
    </>
  );
}
