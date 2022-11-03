import Heart from "../Heart";

const Cat = ({ id, url, activeHeart, favourite }) => {
  return (
    <>
      <article key={id} className="bg-gray-200 relative article-cats">
        <img
          src={url}
          alt={`${id}-cat`}
          className="w-56 h-56 object-cover relative"
        />

        <Heart
          className="text-orange absolute z-[2] bottom-3 right-3 cursor-pointer"
          id={id}
          activeHeart={activeHeart}
          favourite={favourite}
        />
      </article>
    </>
  );
};

export default Cat;
