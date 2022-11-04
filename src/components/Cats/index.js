import Cat from "../Cat";
import PropTypes from "prop-types";

const Cats = ({ cats }) => {
  return (
    <div className="flex justify-center md:justify-start flex-wrap gap-12">
      {cats &&
        cats.map(
          (
            {
              id,
              url,
              activeHeart = false,
              favourite = false,
              image_id = null,
            },
            idx
          ) => (
            <Cat
              key={`${idx}${id}`}
              id={id}
              url={url}
              activeHeart={activeHeart}
              favourite={favourite}
              image_id={image_id}
            />
          )
        )}
    </div>
  );
};

Cats.propTypes = {
  Cats: PropTypes.array,
};

export default Cats;
