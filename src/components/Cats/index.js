import Cat from "../Cat";

const Cats = ({ cats }) => {
  return (
    <div className="flex justify-center flex-wrap gap-12">
      {cats &&
        cats.map(({ id, url, activeHeart = false, favourite = false }, idx) => (
          <Cat
            key={`${idx}${id}`}
            id={id}
            url={url}
            activeHeart={activeHeart}
            favourite={favourite}
          />
        ))}
    </div>
  );
};

export default Cats;
