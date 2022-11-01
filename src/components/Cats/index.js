import Cat from "../Cat";

const Cats = ({ cats }) => {
  return <>{cats && cats.map(({ id, url }, idx) => <Cat key={`${idx}${id}`} id={id} url={url} />)}</>;
};

export default Cats;
