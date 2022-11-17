import React, { useEffect, useState } from "react";
import { useHover } from "../../../../utils/hooks/hover";
import HeartFill from "../../../../components/HeartFill";
import HeartStroke from "../../../../components/HeartStroke";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useHeart } from "../../../../utils/hooks/heart";

const Heart = ({
  id,
  image_id,
  isFavourite,
  favoured,
  className,

  isLoadingCats,
  isLoadingCatsFavourite,
  addCatFavourites,
  removeCatFavourites,
  addCatsFavourites,
  removeCatsFavourites,
}) => {
  const [hookRef, hookValue] = useHover();
  const [active, setActive] = useHeart(false, isFavourite);

  const handler = () => {
    setActive(!active);

    if (!isLoadingCats && !isLoadingCatsFavourite) {
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
            "opacity-50 pointer-events-none":
              isLoadingCats || isLoadingCatsFavourite,
          })}
        />
      ) : hookValue ? (
        <HeartFill
          className={classNames("h-9.5", {
            "opacity-50 pointer-events-none":
              isLoadingCats || isLoadingCatsFavourite,
          })}
        />
      ) : (
        <HeartStroke
          className={classNames("h-9.5", {
            "opacity-50 pointer-events-none":
              isLoadingCats || isLoadingCatsFavourite,
          })}
        />
      )}
    </div>
  );
};

Heart.propTypes = {
  id: PropTypes.number,
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
