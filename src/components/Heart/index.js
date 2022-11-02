import { useHover } from "../../utils/hooks/hover";
import { useState } from "react";
import HeartFill from "./HeartFill";
import HeartStroke from "./HeartStroke";

import {
  setCatFavourite,
  deleteCatFavourite,
} from "../../modules/catFavourite";
import { connect } from "react-redux";

const Heart = ({ className, id, setCatFavourite, deleteCatFavourite }) => {
  const [hookRef, hookValue] = useHover();
  const [active, setActive] = useState(false);

  return (
    <div
      className={className}
      ref={hookRef}
      onClick={() => {
        setActive(!active);
        active ? deleteCatFavourite(id) : setCatFavourite(id);
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
