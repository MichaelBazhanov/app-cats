import Cats from "../Cats";
import Button from "../Button";
import Loading from "../Loading";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { getCats } from "../../modules/cats";

let CatsContainer = ({ cats, isLoading, error, getCats }) => {
  useEffect(() => {
    getCats(3); //15
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

      {!isLoading && cats.length > 0 && <Cats cats={cats} />}

      <Button className="mt-12 mb-8 mx-auto bg-blue rounded-md px-4 py-2 text-white whitespace-nowrap tracking-wide" />
    </div>
  );
};

CatsContainer.propTypes = {
  cats: PropTypes.array,
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
