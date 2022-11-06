export default function filtredToArray({
  array = [],
  filterSign = [],
  params = {},
}) {
  let filtredArray = [];
  if (filterSign.length === 0) return array;

  filtredArray = array.map((e) => {
    if (filterSign.length === 1) {
      if (e.catId === filterSign[0]) {
        return { ...e, ...params };
      } else {
        return { ...e };
      }
    } else if (filterSign.length === 2) {
      if (e.catId === (filterSign[0] || filterSign[1])) {
        return { ...e, ...params };
      } else {
        return { ...e };
      }
    }
  });

  return filtredArray;
}
