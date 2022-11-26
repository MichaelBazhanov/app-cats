export function filteringByFlag(array, flag, value) {
  return array.filter((cat) => {
    if (flag) {
      return cat.isFavourite === value;
    }

    return cat;
  });
}
