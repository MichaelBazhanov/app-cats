export function useHeartClick(props) {
  const {
    active: { active, setActive },
    loading: { isLoadingCats, isLoadingCatsFavourite },
    favoured,
    methods: {
      addCatFavourites,
      removeCatFavourites,
      addCatsFavourites,
      removeCatsFavourites,
    },
  } = props;

  const handler = () => {
    setActive(!active);

    if (!isLoadingCats && !isLoadingCatsFavourite) {
      if (favoured) {
        if (active) {
          removeCatsFavourites();
        } else {
          addCatsFavourites();
        }
      } else {
        if (active) {
          removeCatFavourites();
        } else {
          addCatFavourites();
        }
      }
    }
  };
  return [handler];
}
