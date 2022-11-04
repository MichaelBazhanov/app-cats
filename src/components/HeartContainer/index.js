import Heart from "../Heart";
import {
  setCatFavourite,
  deleteCatFavourite,
} from "../../modules/catFavourite";
import { connect } from "react-redux";

const HeartContainer = ({
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

export default connect(
  (state) => ({
    isLoading: state.catFavouriteReducer.isLoading,
  }),
  {
    setCatFavourite,
    deleteCatFavourite,
  }
)(HeartContainer);
