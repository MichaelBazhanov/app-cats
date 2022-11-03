import { useHover } from "../../utils/hooks/hover";
import { useEffect, useState } from "react";
import HeartFill from "./HeartFill";
import HeartStroke from "./HeartStroke";

import {
  setCatFavourite,
  deleteCatFavourite,
} from "../../modules/catFavourite";
import { connect } from "react-redux";

const Heart = ({
  className,
  id,
  setCatFavourite,
  deleteCatFavourite,
  activeHeart = null, // default
  favourite = null, // default
}) => {
  const [hookRef, hookValue] = useHover();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (activeHeart) setActive(true);
  }, [activeHeart]);

  const activeFavourite = () => {
    if (favourite) {
      return { favouriteId: id };
    } else {
      return { catId: id };
    }
  };

  return (
    <div
      className={className}
      ref={hookRef}
      onClick={() => {
        setActive(!active);
        active ? deleteCatFavourite(activeFavourite()) : setCatFavourite(activeFavourite());
      }}
    >
      {active ? (
        <HeartFill className="h-9.5" />
      ) : hookValue ? (
        <HeartFill className="h-9.5" />
      ) : (
        <HeartStroke className="h-9.5" />
      )}
    </div>
  );
};

// export default Heart;
export default connect(null, {
  setCatFavourite,
  deleteCatFavourite,
})(Heart);
