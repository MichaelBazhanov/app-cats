const data = [
  { id: 0, name: "Показать всех" },
  { id: 1, name: "Показать любимых" },
  { id: 2, name: "Не показывать любимых" },
];

const FilterCats = ({ filterValueSelected }) => {
  // const onFilterValueClick = (e) => {
  //   filterValueSelected(e.target.innerHTML);
  // };

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-4 justify-end bg-blue bg-opacity-10">
        {data.map((e) => {
          return (
            <button
              onClick={() => filterValueSelected(e.name)}
              key={e.id}
              data-name={e.name}
              className="bg-blue px-4 py-2 cursor-pointer text-white whitespace-nowrap tracking-wide text-sm"
            >
              {e.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCats;
