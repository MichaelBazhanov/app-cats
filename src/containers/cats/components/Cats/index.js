import Cat from "../../../../components/Cat";
import PropTypes from "prop-types";
import HeartContainer from "../../../heart/HeartContainer";

const Cats = ({ cats }) => {
  return (
    <div className="flex justify-center md:justify-start flex-wrap gap-12">
      {cats &&
        cats.map(({ id, image_id, url, isFavourite, favoured }, idx) => (
          <Cat
            key={`${idx}${id}${image_id}`}
            id={id}
            image_id={image_id}
            url={url}
          >
            <HeartContainer
              id={id}
              image_id={image_id}
              isFavourite={isFavourite}
              favoured={favoured}
              className="text-orange absolute z-10 bottom-3 right-3 cursor-pointer hidden group-hover:block"
            />
          </Cat>
        ))}
    </div>
  );
};

Cats.propTypes = {
  Cats: PropTypes.array,
};

export default Cats;
