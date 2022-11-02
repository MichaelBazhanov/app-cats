import CatsFavouritesContainer from "../CatsFavouritesContainer";

const FavouriteKitties = () => {
  return (
    <>
      <h1 className="sr-only">Favorite Kitties</h1>
      <section>
        <div className="max-w-screen-me mx-auto px-6 mt-12">
          <CatsFavouritesContainer />
        </div>
      </section>
    </>
  );
};

export default FavouriteKitties;
