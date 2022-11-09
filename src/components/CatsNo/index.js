import Button from "../Button";

const CatsNo = ({ children, getCats }) => {
  return (
    <>
      <div>
        <h2 className="mx-auto font-bold text-2xl text-center">{children}</h2>
        <div className="h-80 w-90 bg-weeping-cat bg-no-repeat bg-contain bg-center"></div>
      </div>

      <Button
        className="mt-12 mb-8 mx-auto bg-blue rounded-md px-4 py-2 text-white whitespace-nowrap tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => getCats()}
      />
    </>
  );
};

export default CatsNo;
