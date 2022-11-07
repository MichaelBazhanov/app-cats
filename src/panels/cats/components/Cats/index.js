import Cat from "../../../../components/Cat";
import PropTypes from "prop-types";
import HeartContainer from "../../../heart/HeartContainer";

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
            <Cat key={`${idx}${id}`} id={id} url={url}>
              <HeartContainer
                id={id}
                className="text-orange absolute z-[2] bottom-3 right-3 cursor-pointer hidden group-hover:block"
                activeHeart={activeHeart}
                favourite={favourite}
                image_id={image_id}
              />
            </Cat>
          )
        )}
    </div>
  );
};

Cats.propTypes = {
  Cats: PropTypes.array,
};

export default Cats;
