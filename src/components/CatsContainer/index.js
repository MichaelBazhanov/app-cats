import Cats from "../Cats";
import Button from "../Button";
import Loading from "../Loading";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getCats } from "../../modules/cats";

let CatsContainer = ({ cats, isLoading, error, getCats, catFavourite }) => {
  const firstLoadedCutsNumber = 3;

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (cats.length === 0) { // Первая загрузка и далее уже дозагрузка по кнопке
      getCats(firstLoadedCutsNumber); // 15
    }
    setShowButton(true);
    console.log(catFavourite)
  }, []);

  // const filteredСats = () => {
  //   console.log(cats)
  //    let a = cats.map((e) => {
  //     if (!e.activeFavourite) {
  //       return e
  //     }
  //   })
  //   console.log(a)
  //   return  a
  // }

  return (
    <>
      {error && (
        <div className="flex flex-col w-full">
          <h2 className="text-3xl font-bold mb-5 text-center">
            Sorry. Kitty's crying. There's been some kind of mistake.
          </h2>
          <div className="h-80 w-90 bg-weeping-cat bg-no-repeat bg-contain bg-center"></div>
        </div>
      )}

      {!error && isLoading && (
        <div className="flex justify-center items-center w-full fixed z-10 inset-0 bg-black bg-opacity-30">
          <Loading color="text-blue" size="h-10 w-10" />
        </div>
      )}

      {!error && !isLoading && cats.length === 0 && (
        <div>
          <h2 className="mx-auto font-bold text-2xl text-center">
            Sorry, but the cats didn't come this time
          </h2>
          <div className="h-80 w-90 bg-weeping-cat bg-no-repeat bg-contain bg-center"></div>
        </div>
      )}

      {!error && cats.length > 0 && <Cats cats={cats} />}

      {!error && showButton && cats.length > 0 && (
        <Button
          disabled={isLoading}
          className="mt-12 mb-8 mx-auto bg-blue rounded-md px-4 py-2 text-white whitespace-nowrap tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
          getCats={() => getCats(firstLoadedCutsNumber)}
        />
      )}
    </>
  );
};

CatsContainer.propTypes = {
  cats: PropTypes.array,
  catFavourite: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  getCats: PropTypes.func,
};

CatsContainer = connect(
  (state) => ({
    cats: state.catsReducer.cats,
    isLoading: state.catsReducer.isLoading,
    error: state.catsReducer.error,
    catFavourite: state.catFavouriteReducer.catFavourite,
  }),
  {
    getCats,
  }
)(CatsContainer);

export default CatsContainer;
