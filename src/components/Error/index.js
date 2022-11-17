import { useEffect } from "react";
import { useState } from "react";

const Error = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setCount(count - 1);
    // }, 1000);

    // if (count === 0) {
    //   window.location.reload();
    //   clearTimeout(timer);
    // }

    // return () => {
    //   clearTimeout(timer);
    // };
  }, [count]);

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-3xl font-bold mb-5 text-center">
        Sorry. Kitty's crying. There's been some kind of mistake.
      </h2>
      <div className="h-80 w-90 bg-weeping-cat bg-no-repeat bg-contain bg-center"></div>
      <h2 className="text-3xl font-bold mb-5 text-center">
        The page will be reloaded in {count}
      </h2>
    </div>
  );
};

export default Error;
