const CatsNo = ({ children }) => {
  return (
    <div>
      <h2 className="mx-auto font-bold text-2xl text-center">{children}</h2>
      <div className="h-80 w-90 bg-weeping-cat bg-no-repeat bg-contain bg-center"></div>
    </div>
  );
};

export default CatsNo;
