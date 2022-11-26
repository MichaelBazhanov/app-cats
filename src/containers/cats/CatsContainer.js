import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Cats from "./components/Cats";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import CatsNo from "../../components/CatsNo";
import { getCats } from "../../modules/cats";
import FilterCats from "../../components/FilterCats";
import { useLocalStorage } from "./../../utils/hooks/useLocalStorage";
import { getValue } from "../../utils/helpers/getValue";
import { filteringByFlag } from "../../utils/helpers/filteringByFlag";
import PropTypes from "prop-types";

let CatsContainer = ({ cats, isLoading, error, getCats }) => {
  const firstLoadedCutsNumber = 10; // 15 // Первая загрузка

  useEffect(() => {
    if (!filteredCats.length) getCats(firstLoadedCutsNumber);
  }, []);

  const [valueFiltered, setValueFiltered] = useLocalStorage(
    true,
    "filtered-cats"
  );

  const toggleFilteredCats = () => {
    setValueFiltered(!valueFiltered);
  };

  const changedTitle = getValue(
    valueFiltered,
    "Показаны и простые и любимые кошки",
    "Показаны только простые кошки"
  );

  const filteredCats = filteringByFlag(cats, !valueFiltered, false);

  return (
    <>
      {error && <Error />}

      {!error && isLoading && <Loading color="text-blue" size="h-10 w-10" />}

      {!error && !isLoading && filteredCats.length === 0 && (
        <CatsNo getCats={() => getCats(firstLoadedCutsNumber)}>
          Sorry you ran out of kitties. Try downloading some more.
        </CatsNo>
      )}

      {!error && filteredCats.length > 0 && (
        <>
          <FilterCats
            valueFiltered={valueFiltered}
            toggleFilteredCats={toggleFilteredCats}
            changedTitle={changedTitle}
          />
          <Cats cats={filteredCats} />
        </>
      )}

      {!error && filteredCats.length > 0 && (
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
