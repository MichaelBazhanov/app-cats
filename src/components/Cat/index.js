import PropTypes from "prop-types";

const Cat = ({ children, id, url }) => {
  return (
    <article className="bg-gray-200 relative group article-cats">
      <img
        src={url}
        alt={`${id}-cat`}
        title={`${id}-cat`}
        className="w-56 h-56 object-cover relative"
      />
      {children}
    </article>
  );
};

Cat.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Cat;
