import PropTypes from "prop-types";

const Checkbox = ({ initialValue = true, settingValue = () => {} }) => {
  return (
    <input
      checked={initialValue}
      onChange={() => settingValue()}
      type="checkbox"
      name="filter-cats"
      className="cursor-pointer relative w-16 h-8 appearance-none bg-gray-300 outline-none rounded-3xl shadow-inner duration-500 transition-colors
        checked:bg-green-400
        before:content-[''] before:absolute before:w-8 before:h-8 before:rounded-3xl before:top-0 before:left-0 before:bg-white before:scale-110 before:shadow-md before:duration-500
        before:checked:left-8"
    />
  );
};

Checkbox.propTypes = {
  initialValue: PropTypes.bool,
  settingValue: PropTypes.func,
};

export default Checkbox;
