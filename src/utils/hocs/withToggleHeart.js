export function withHeart(Component) {
  const WithHeart = function (props) {
    const {
      id,
      image_id,
      className,
      isFavourite,
      favoured,
      isLoadingCats,
      isLoadingCatsFavourite,
      addCatFavourites,
      removeCatFavourites,
      addCatsFavourites,
      removeCatsFavourites,
      ...otherProps
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

    return (
      <Component
        handler={handler}
        // isLoading={!isLoadingCats && !isLoadingCatsFavourite}
        isLoading={isLoadingCats && isLoadingCatsFavourite}
        {...otherProps}
      />
    );
  };

  WithHeart.displayName = "withHeart";

  return WithHeart;
}
