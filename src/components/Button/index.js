import PropTypes from "prop-types";

const Button = ({ className, onClick = () => {}, disabled }) => {
  return (
    <div className="flex">
      <button
        className={`${className}`}
        onClick={() => onClick()}
        disabled={disabled}
      >
        ... загружаем еще котиков ...
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
