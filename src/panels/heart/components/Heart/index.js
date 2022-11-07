import React, { useEffect, useState } from "react";
import { useHover } from "../../../../utils/hooks/hover";
import HeartFill from "../../../../components/HeartFill";
import HeartStroke from "../../../../components/HeartStroke";
import classNames from "classnames";
import PropTypes from "prop-types";

const Heart = ({
  className,
  id,
  isLoading,
  setCatVisited,
  deleteCatVisited,
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
            ? deleteCatVisited(activeFavourite())
            : setCatVisited(activeFavourite());
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

Heart.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLoading: PropTypes.bool,
  setCatVisited: PropTypes.func,
  deleteCatVisited: PropTypes.func,
  activeHeart: PropTypes.bool,
  favourite: PropTypes.bool,
  image_id: PropTypes.string,
};

export default Heart;
