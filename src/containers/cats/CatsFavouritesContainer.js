import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Cats from "./components/Cats";
import Button from "../../components/Button";
import CatsNo from "../../components/CatsNo";
import { getCatsFavourites } from "../../modules/catsFavourites";
import FilterCats from "../../components/FilterCats";
import { useLocalStorage } from "./../../utils/hooks/useLocalStorage";
import { getValue } from "../../utils/helpers/getValue";
import { filteringByFlag } from "../../utils/helpers/filteringByFlag";
import PropTypes from "prop-types";

let CatsFavouritesContainer = ({
  catsFavourites,
  isLoading,
  error,
  getCatsFavourites,
}) => {
  const firstLoadedCutsFavouritesNumber = 10; // 15 // Первая загрузка
  const additionNumber = 5; // 6 // Число прибавления по кнопке

  const [count, setCount] = useState(firstLoadedCutsFavouritesNumber);

  useEffect(() => {
    getCatsFavourites(count);
  }, [count]);

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
    "Показаны только любимые кошки"
  );

  const filteredCats = filteringByFlag(catsFavourites, !valueFiltered, true);

  return (
    <>
      {error && <Error />}

      {!error && isLoading && <Loading color="text-blue" size="h-10 w-10" />}

      {!error && !isLoading && filteredCats.length === 0 && (
        <CatsNo getCats={() => getCatsFavourites(count)}>
          Sorry, but the cats didn't come this time
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
          onClick={() => setCount(count + additionNumber)}
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
