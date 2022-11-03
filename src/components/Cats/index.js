import Cat from "../Cat";

const Cats = ({ cats }) => {
  return (
    <div className="flex justify-center flex-wrap gap-12">
      {cats &&
        cats.map(({ id, url, activeHeart }, idx) => (
          <Cat
            key={`${idx}${id}`}
            id={id}
            url={url}
            activeHeart={activeHeart}
          />
        ))}
    </div>
  );
};

export default Cats;
