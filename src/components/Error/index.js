const Error = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-3xl font-bold mb-5 text-center">{children}</h2>
      <div className="h-80 w-90 bg-weeping-cat bg-no-repeat bg-contain bg-center"></div>
    </div>
  );
};

export default Error;
