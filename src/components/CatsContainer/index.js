import Cats from "../Cats";
import Button from "../Button";
import Loading from "../Loading";
import Error from "../Error";
import CatsNo from "../CatsNo";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getCats } from "../../modules/cats";

const filtered = ({ cats, catsVisited }) => {
  return cats.filter((e) => {
    const cat = catsVisited.filter((v) => {
      return e.id === v.catId && v.activeFavourite;
    });
    return !cat.length;
  });
};

let CatsContainer = ({ cats, isLoading, error, getCats, catsVisited }) => {
  const firstLoadedCutsNumber = 6;

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Первая загрузка и далее уже дозагрузка по кнопке
    if (cats.length === 0) {
      getCats(firstLoadedCutsNumber); // 15
    }
    setShowButton(true);
  }, []);

  useEffect(() => {
    setFilteredСats(filtered({ cats, catsVisited }));
  }, [cats]);

  const [filteredСats, setFilteredСats] = useState([]);

  return (
    <>
      {error && (
        <Error>Sorry. Kitty's crying. There's been some kind of mistake.</Error>
      )}

      {!error && isLoading && <Loading color="text-blue" size="h-10 w-10" />}

      {!error && !isLoading && filteredСats.length === 0 && (
        <CatsNo>
          Sorry you ran out of kitties. Try downloading some more.
        </CatsNo>
      )}

      {!error && filteredСats.length > 0 && <Cats cats={filteredСats} />}

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
  catsVisited: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  getCats: PropTypes.func,
};

CatsContainer = connect(
  (state) => ({
    cats: state.catsReducer.cats,
    isLoading: state.catsReducer.isLoading,
    error: state.catsReducer.error,
    catsVisited: state.catsVisitedReducer.catFavourite,
  }),
  {
    getCats,
  }
)(CatsContainer);

export default CatsContainer;
