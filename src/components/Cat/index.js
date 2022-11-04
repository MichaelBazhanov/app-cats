import HeartContainer from "../HeartContainer";
import PropTypes from "prop-types";

const Cat = ({ id, url, activeHeart, favourite, image_id }) => {
  return (
    <>
      <article key={id} className="bg-gray-200 relative group article-cats">
        <img
          src={url}
          alt={`${id}-cat`}
          className="w-56 h-56 object-cover relative"
        />

        <HeartContainer
          className="text-orange absolute z-[2] bottom-3 right-3 cursor-pointer hidden group-hover:block"
          id={id}
          activeHeart={activeHeart}
          favourite={favourite}
          image_id={image_id}
        />
      </article>
    </>
  );
};

Cat.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  url: PropTypes.string,
  activeHeart: PropTypes.bool,
  favourite: PropTypes.bool,
  image_id: PropTypes.string,
};

export default Cat;
