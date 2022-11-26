import Checkbox from "../Checkbox";
import PropTypes from "prop-types";

const FilterCats = ({ valueFiltered, toggleFilteredCats, changedTitle }) => {
  return (
    <div
      className="mb-6 p-1 flex items-center flex-wrap gap-4 justify-end bg-blue bg-opacity-10"
      title={changedTitle}
    >
      <h3 className="text-sm text-black whitespace-nowrap tracking-wide">
        Показать всех
      </h3>
      <Checkbox
        initialValue={valueFiltered}
        settingValue={toggleFilteredCats}
      />
    </div>
  );
};

FilterCats.propTypes = {
  valueFiltered: PropTypes.bool,
  settingValue: PropTypes.func,
  changeTitle: PropTypes.string,
};

export default FilterCats;
