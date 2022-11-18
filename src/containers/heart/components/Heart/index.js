import { useHover } from "../../../../utils/hooks/hover";
import HeartFill from "../../../../components/HeartFill";
import HeartStroke from "../../../../components/HeartStroke";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withHeart } from "../../../../utils/hocs/withHeart";

const Heart = ({ className, isLoading, isFavourite, handler }) => {
  const [hookRef, hookValue] = useHover();

  return (
    <div
      className={className}
      ref={hookRef}
      onClick={() => {
        if (!isLoading) handler();
      }}
    >
      {isFavourite ? (
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
  isFavourite: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  handler: PropTypes.func,
};

export default withHeart(Heart);
