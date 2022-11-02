import { useContext } from "react";
import { ContextCats } from "../CatsContainer";
// import { ContextFavouritesCats } from "../CatsFavouritesContainer";
import Heart from "../Heart";

const Cat = ({ id, url }) => {
  const { setCatFavourite } = useContext(ContextCats);
  // const { setCatFavourite } = useContext(ContextFavouritesCats);

  return (
    <>
      <article key={id} className="bg-gray-200 relative article-cats">
        <img
          src={url}
          alt={`${id}-cat`}
          className="w-56 h-56 object-cover relative"
        />

        <Heart
          className="text-orange absolute z-[2] bottom-3 right-3 cursor-pointer"
          setCatFavourite={() => setCatFavourite(id)}
        />
      </article>
    </>
  );
};

export default Cat;
