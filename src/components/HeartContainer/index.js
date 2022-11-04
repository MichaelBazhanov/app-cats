import Heart from "../Heart";
import {
  setCatFavourite,
  deleteCatFavourite,
} from "../../modules/catFavourite";
import { connect } from "react-redux";
import PropTypes from "prop-types";

let HeartContainer = ({
  className,
  id,
  isLoading,
  setCatFavourite,
  deleteCatFavourite,
  activeHeart,
  favourite,
  image_id,
}) => {
  return (
    <Heart
      className={className}
      id={id}
      activeHeart={activeHeart}
      favourite={favourite}
      image_id={image_id}
      isLoading={isLoading}
      setCatFavourite={setCatFavourite}
      deleteCatFavourite={deleteCatFavourite}
    />
  );
};

HeartContainer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLoading: PropTypes.bool,
  setCatFavourite: PropTypes.func,
  deleteCatFavourite: PropTypes.func,
  activeHeart: PropTypes.bool,
  favourite: PropTypes.bool,
  image_id: PropTypes.string,
};

HeartContainer = connect(
  (state) => ({
    isLoading: state.catFavouriteReducer.isLoading,
  }),
  {
    setCatFavourite,
    deleteCatFavourite,
  }
)(HeartContainer);

export default HeartContainer;
