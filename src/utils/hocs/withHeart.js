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
      if (favoured) {
        if (isFavourite) {
          removeCatsFavourites({ id });
        } else {
          addCatsFavourites({ image_id });
        }
      } else {
        if (isFavourite) {
          removeCatFavourites({ id });
        } else {
          addCatFavourites({ image_id });
        }
      }
    };

    return (
      <Component
        handler={handler}
        isFavourite={isFavourite}
        className={className}
        isLoading={isLoadingCats || isLoadingCatsFavourite}
        {...otherProps}
      />
    );
  };

  WithHeart.displayName = "withHeart";

  return WithHeart;
}
