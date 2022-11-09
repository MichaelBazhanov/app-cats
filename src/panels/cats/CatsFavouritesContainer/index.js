import Cats from "../components/Cats";
import Button from "../../../components/Button";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";
import CatsNo from "../../../components/CatsNo";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCatsFavourites } from "../../../modules/catsFavourites";

let CatsFavouritesContainer = ({
  catsFavourites,
  isLoading,
  error,
  getCatsFavourites,
}) => {
  const firstLoadedCutsFavouritesNumber = 6;

  const [showButton, setShowButton] = useState(false);
  const [count, setCount] = useState(firstLoadedCutsFavouritesNumber); // loaded cats number //15

  useEffect(() => {
    setShowButton(true);
  }, []);

  useEffect(() => {
    getCatsFavourites(count);
  }, [count]);

  return (
    <>
      {error && <Error />}

      {!error && isLoading && <Loading color="text-blue" size="h-10 w-10" />}

      {!error && !isLoading && catsFavourites.length === 0 && (
        <CatsNo getCats={() => getCatsFavourites(count)}>
          Sorry, but the cats didn't come this time
        </CatsNo>
      )}

      {!error && catsFavourites.length > 0 && <Cats cats={catsFavourites} />}

      {!error && showButton && catsFavourites.length > 0 && (
        <Button
          disabled={isLoading}
          className="mt-12 mb-8 mx-auto bg-blue rounded-md px-4 py-2 text-white whitespace-nowrap tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCount(count + 6)}
        />
      )}
    </>
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
