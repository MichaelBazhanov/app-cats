import Cat from "../Cat";

const Cats = ({ cats }) => {
  return (
    <div className="flex justify-center flex-wrap gap-12">
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

export default Cats;
