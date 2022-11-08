import PropTypes from "prop-types";

const Cat = ({ children, id, image_id, url }) => {
  return (
    <article className="bg-gray-200 relative group article-cats">
      <img
        src={url}
        alt={`${id}-${image_id}-cat`}
        title={`${id}-${image_id}-cat`}
        className="w-56 h-56 object-cover relative"
      />
      {children}
    </article>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  image_id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Cat;
