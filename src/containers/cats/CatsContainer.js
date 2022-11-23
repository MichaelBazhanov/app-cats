import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Cats from "./components/Cats";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import CatsNo from "../../components/CatsNo";
import PropTypes from "prop-types";
import { getCats } from "../../modules/cats";
import FilterCats from "../../components/FilterCats";

let CatsContainer = ({ cats, isLoading, error, getCats }) => {
  const firstLoadedCutsNumber = 1; // 15 // Первая загрузка

  useEffect(() => {
    if (!filtredCats.length) getCats(firstLoadedCutsNumber);
  }, []);

  const [filterValue, setFilterValue] = useState("Показать всех");

  const onFilterValueSelected = (filterValue) => {
    setFilterValue(filterValue);
  };

  const filtredCats = cats.filter((cat) => {
    if (filterValue === "Показать всех") {
      return cat;
    } else if (filterValue === "Показать любимых") {
      return cat.isFavourite === true;
    } else if (filterValue === "Не показывать любимых") {
      return cat.isFavourite === false;
    }
  });

  return (
    <>
      {error && <Error />}

      {!error && isLoading && <Loading color="text-blue" size="h-10 w-10" />}

      {!error && !isLoading && filtredCats.length === 0 && (
        <CatsNo getCats={() => getCats(firstLoadedCutsNumber)}>
          Sorry you ran out of kitties. Try downloading some more.
        </CatsNo>
      )}

      {!error && filtredCats.length > 0 && (
        <>
          {/* <FilterCats filterValueSelected={onFilterValueSelected} /> */}
          <Cats cats={filtredCats} />
        </>
      )}

      {!error && filtredCats.length > 0 && (
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
