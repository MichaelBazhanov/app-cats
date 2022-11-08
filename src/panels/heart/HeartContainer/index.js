import Heart from "../components/Heart";
import { addCatFavourites, removeCatFavourites } from "../../../modules/cats";
import {
  addCatsFavourites,
  removeCatsFavourites,
} from "../../../modules/catsFavourites";
import { connect } from "react-redux";
import PropTypes from "prop-types";

let HeartContainer = ({
  id,
  image_id,
  isFavourite,
  favoured,
  className,
  isLoading,
  addCatFavourites,
  removeCatFavourites,
  addCatsFavourites,
  removeCatsFavourites,
}) => {
  return (
    <Heart
      id={id}
      image_id={image_id}
      className={className}
      isFavourite={isFavourite}
      favoured={favoured}
      isLoading={isLoading}
      addCatFavourites={addCatFavourites}
      removeCatFavourites={removeCatFavourites}
      addCatsFavourites={addCatsFavourites}
      removeCatsFavourites={removeCatsFavourites}
    />
  );
};

HeartContainer.propTypes = {
  id: PropTypes.number,
  image_id: PropTypes.string,
  isFavourite: PropTypes.bool,
  favoured: PropTypes.bool,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  addCatFavourites: PropTypes.func,
  removeCatFavourites: PropTypes.func,
  addCatsFavourites: PropTypes.func,
  removeCatsFavourites: PropTypes.func,
};

HeartContainer = connect(
  (state) => ({
    isLoading: state.catsReducer.isLoading,
  }),
  {
    addCatFavourites,
    removeCatFavourites,
    addCatsFavourites,
    removeCatsFavourites,
  }
)(HeartContainer);

export default HeartContainer;
