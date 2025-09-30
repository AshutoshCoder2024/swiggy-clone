export default function Groceriescard({ groceriesdata }) {
  return (
    <>
      <a href={""}>
        <img
          className="max-w-40 h-36 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            groceriesdata?.imageId
          }
        ></img>
        <h1 className="font-bold text-center">{groceriesdata?.action?.text}</h1>
      </a>
    </>
  );
}
// className="w-36 h-45 flex flex-wrap container mx-w justify-start "
