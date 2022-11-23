const Error = () => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-3xl font-bold mb-5 text-center">
        Sorry. Kitty's crying. There's been some kind of mistake.
      </h2>
      <div className="h-80 w-90 bg-weeping-cat bg-no-repeat bg-contain bg-center"></div>
      <button
        className="text-3xl font-bold mb-5 text-center bg-blue self-center px-4 py-2 text-white shadow-xl rounded-sm  whitespace-nowrap tracking-wide hover:text-black transition-colors"
        onClick={reload}
      >
        Reload Page
      </button>
    </div>
  );
};

export default Error;
