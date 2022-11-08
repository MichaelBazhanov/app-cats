import Cats from "../components/Cats";
import Button from "../../../components/Button";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";
import CatsNo from "../../../components/CatsNo";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCats } from "../../../modules/cats";

let CatsContainer = ({ cats, isLoading, error, getCats }) => {
  const firstLoadedCutsNumber = 6;

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Первая загрузка и далее уже дозагрузка по кнопке
    if (cats.length === 0) {
      getCats(firstLoadedCutsNumber); // 15
    }
    setShowButton(true);
  }, []);

  return (
    <>
      {error && <Error />}

      {!error && isLoading && <Loading color="text-blue" size="h-10 w-10" />}

      {!error && !isLoading && cats.length === 0 && (
        <CatsNo>
          Sorry you ran out of kitties. Try downloading some more.
        </CatsNo>
      )}

      {!error && cats.length > 0 && <Cats cats={cats} />}

      {!error && showButton && cats.length > 0 && (
        <Button
          disabled={isLoading}
          className="mt-12 mb-8 mx-auto bg-blue rounded-md px-4 py-2 text-white whitespace-nowrap tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => getCats(firstLoadedCutsNumber)}
        />
      )}
    </>
  );
};

CatsContainer.propTypes = {
  cats: PropTypes.array,
  // catsVisited: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  getCats: PropTypes.func,
};

CatsContainer = connect(
  (state) => ({
    cats: state.catsReducer.cats,
    isLoading: state.catsReducer.isLoading,
    error: state.catsReducer.error,
  }),
  {
    getCats,
  }
)(CatsContainer);

export default CatsContainer;
