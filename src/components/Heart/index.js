import { useHover } from "../../utils/hooks/hover";
import { useState } from "react";
import HeartFill from "./HeartFill";
import HeartStroke from "./HeartStroke";

const Heart = ({ className, setCatFavourite }) => {
  const [hookRef, hookValue] = useHover();
  const [active, setActive] = useState(false);

  return (
    <div
      className={className}
      ref={hookRef}
      onClick={() => {
        setActive(!active);
        if(!active) setCatFavourite()
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

export default Heart;
