import Cat from "../Cat";

const Cats = ({ cats }) => {
  return <>{cats && cats.map(({ id, url }) => <Cat key={id} id={id} url={url} />)}</>;
};

export default Cats;
