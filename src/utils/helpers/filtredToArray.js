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

// catsVisitedSaga 114 и 182 строки
// ===========================================================
// const catFavouriteFilter = filtredToArray({
//   array: catsVisitedReducer,
//   filterSign: [catId],
//   params: { favouriteId: favouriteId, activeFavourite: false },
// }); // Для теста хелпера
// ===========================================================
