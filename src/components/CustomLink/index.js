import React from "react";
import { Link, useMatch } from "react-router-dom";
import classNames from "classnames";

const LinkCustom = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link
      to={to}
      className={classNames(
        "py-6 px-5.5 text-sm cursor-pointer whitespace-nowrap tracking-wide",
        { "text-white bg-black bg-opacity-10": match },
        {
          "text-white/70 hover:text-white hover:bg-black hover:bg-opacity-10 transition-colors":
            !match,
        }
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkCustom;
