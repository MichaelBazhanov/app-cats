import PropTypes from "prop-types";

const Button = ({ className, onClick }) => {
  return (
    <div className="flex">
      <button className={`${className}`} onClick={onClick}>
        ... загружаем еще котиков ...
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
