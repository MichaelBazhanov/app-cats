import PropTypes from "prop-types";

const Button = ({
  className,
  numberFavouriteCats = () => {},
  getCatsFavourites = () => {},
  getCats = () => {},
  disabled,
}) => {
  const handler = () => {
    numberFavouriteCats();
    getCatsFavourites();
    getCats();
  };
  return (
    <div className="flex">
      <button className={`${className}`} onClick={handler} disabled={disabled}>
        ... загружаем еще котиков ...
      </button>
    </div>
  );
};

Button.propTypes = {
  numberFavouriteCats: PropTypes.func,
  getCatsFavourites: PropTypes.func,
  getCats: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
