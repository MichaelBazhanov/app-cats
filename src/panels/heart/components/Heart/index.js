import React, { useEffect, useState } from "react";
import { useHover } from "../../../../utils/hooks/hover";
import HeartFill from "../../../../components/HeartFill";
import HeartStroke from "../../../../components/HeartStroke";
import classNames from "classnames";
import PropTypes from "prop-types";

const Heart = ({
  className,
  id,
  image_id,
  isFavourite,
  favoured,
  isLoading,
  addCatFavourites,
  removeCatFavourites,
  addCatsFavourites,
  removeCatsFavourites,
}) => {
  const [hookRef, hookValue] = useHover();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isFavourite) setActive(true);
  }, [isFavourite]);

  const handler = () => {
    setActive(!active);

    if (!isLoading) {
      if (favoured) {
        if (active) {
          removeCatsFavourites({ id });
        } else {
          addCatsFavourites({ image_id });
        }
      } else {
        if (active) {
          removeCatFavourites({ id });
        } else {
          addCatFavourites({ image_id });
        }
      }
    }
  };

  return (
    <div className={className} ref={hookRef} onClick={handler}>
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
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image_id: PropTypes.string,
  isFavourite: PropTypes.bool,
  favoured: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  addCatFavourites: PropTypes.func,
  removeCatFavourites: PropTypes.func,
  addCatsFavourites: PropTypes.func,
  removeCatsFavourites: PropTypes.func,
};

export default Heart;
