import Heart from "../components/Heart";
import { setCatVisited, deleteCatVisited } from "../../../modules/catsVisited";
import { connect } from "react-redux";
import PropTypes from "prop-types";

let HeartContainer = ({
  className,
  id,
  isLoading,
  setCatVisited,
  deleteCatVisited,
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
      setCatVisited={setCatVisited}
      deleteCatVisited={deleteCatVisited}
    />
  );
};

HeartContainer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLoading: PropTypes.bool,
  setCatVisited: PropTypes.func,
  deleteCatVisited: PropTypes.func,
  activeHeart: PropTypes.bool,
  favourite: PropTypes.bool,
  image_id: PropTypes.string,
};

HeartContainer = connect(
  (state) => ({
    isLoading: state.catsVisitedReducer.isLoading,
  }),
  {
    setCatVisited,
    deleteCatVisited,
  }
)(HeartContainer);

export default HeartContainer;
