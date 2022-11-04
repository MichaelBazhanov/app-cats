import Cats from "../Cats";
import Button from "../Button";
import Loading from "../Loading";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getCatsFavourites } from "../../modules/catsFavourites";

let CatsFavouritesContainer = ({
  catsFavourites,
  isLoading,
  error,
  getCatsFavourites,
}) => {
  useEffect(() => {
    getCatsFavourites(3); //15
  }, []);

  return (
    <div>
      {error && (
        <div className="flex flex-col justify-center items-center w-full height-vh">
          <h2 className="text-3xl font-bold mb-5">
            Sorry. Kitty's crying. There's been some kind of mistake.
          </h2>
          <Loading color="text-red-500" size="h-10 w-10" />
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center items-center w-full height-vh">
          <Loading color="text-blue" size="h-10 w-10" />
        </div>
      )}

      {!isLoading && catsFavourites.length > 0 && (
        <Cats cats={catsFavourites} />
      )}

      <Button className="mt-12 mb-8 mx-auto bg-blue rounded-md px-4 py-2 text-white whitespace-nowrap tracking-wide" />
    </div>
  );
};

CatsFavouritesContainer.propTypes = {
  catsFavourites: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  getCatsFavourites: PropTypes.func,
};

CatsFavouritesContainer = connect(
  (state) => ({
    catsFavourites: state.catsFavouritesReducer.catsFavourites,
    isLoading: state.catsFavouritesReducer.isLoading,
    error: state.catsFavouritesReducer.error,
  }),
  {
    getCatsFavourites,
  }
)(CatsFavouritesContainer);

export default CatsFavouritesContainer;
