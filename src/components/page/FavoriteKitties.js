import CatsFavouritesContainer from "../CatsFavouritesContainer";

const FavouriteKitties = () => {
  return (
    <>
      <h1 className="sr-only">Favourite Kitties</h1>
      <section>
        <div className="max-w-screen-me mx-auto px-6 mt-29">
          <CatsFavouritesContainer />
        </div>
      </section>
    </>
  );
};

export default FavouriteKitties;
