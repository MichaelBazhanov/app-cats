import Cat from "../Cat";

const Cats = ({ cats }) => {
  return (
    <div className="flex justify-center flex-wrap gap-12">
      {cats &&
        cats.map(({ id, url }, idx) => (
          <Cat
            key={`${idx}${id}`}
            id={id}
            url={url}
          />
        ))}
    </div>
  );
};

export default Cats;
