import { useHover } from "../../utils/hooks/hover";
import { useEffect, useState } from "react";
import HeartFill from "./HeartFill";
import HeartStroke from "./HeartStroke";
import classNames from "classnames";
import {
  setCatFavourite,
  deleteCatFavourite,
} from "../../modules/catFavourite";
import { connect } from "react-redux";

const Heart = ({
  className,
  id,
  isLoading,
  setCatFavourite,
  deleteCatFavourite,
  activeHeart = null, // default
  favourite = null, // default
  image_id = null, // default
}) => {
  const [hookRef, hookValue] = useHover();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (activeHeart) setActive(true);
  }, [activeHeart]);

  const activeFavourite = () => {
    if (favourite) {
      return { favouriteId: id, image_id: image_id };
    } else {
      return { catId: id };
    }
  };

  return (
    <div
      className={className}
      ref={hookRef}
      onClick={() => {
        if (!isLoading) {
          setActive(!active);
          active
            ? deleteCatFavourite(activeFavourite())
            : setCatFavourite(activeFavourite());
        }
      }}
    >
      {active ? (
        <HeartFill
          className={classNames("h-9.5", {
            "opacity-50 pointer-events-none": isLoading,
          })}
        />
      ) : hookValue ? (
        <HeartFill
          className={classNames("h-9.5", {
            "opacity-50 pointer-events-none": isLoading,
          })}
        />
      ) : (
        <HeartStroke
          className={classNames("h-9.5", {
            "opacity-50 pointer-events-none": isLoading,
          })}
        />
      )}
    </div>
  );
};

// export default Heart;
export default connect(
  (state) => ({
    isLoading: state.catFavouriteReducer.isLoading,
  }),
  {
    setCatFavourite,
    deleteCatFavourite,
  }
)(Heart);
