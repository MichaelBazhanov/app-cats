import React, { useEffect, useState } from "react";
import { useHover } from "../../../../utils/hooks/hover";
import HeartFill from "../../../../components/HeartFill";
import HeartStroke from "../../../../components/HeartStroke";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useHeart } from "../../../../utils/hooks/heart";
import { useHeartClick } from "../../../../utils/hooks/heartClick";

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

  const [handler] = useHeartClick({
    active: { active, setActive },
    loading: { isLoadingCats, isLoadingCatsFavourite },
    favoured: favoured,
    methods: {
      addCatFavourites: () => addCatFavourites({ image_id }),
      removeCatFavourites: () => removeCatFavourites({ id }),
      addCatsFavourites: () => addCatsFavourites({ image_id }),
      removeCatsFavourites: () => removeCatsFavourites({ id }),
    },
  });

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
