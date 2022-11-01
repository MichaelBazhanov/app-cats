import Cats from "../Cats";
import Button from "../Button";
import { serverGetCats } from "../../api";
import { useEffect, useState } from "react";

const CatsContainer = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    Promise.resolve()
      .then(() => serverGetCats(15)) // 15
      .then(({ success }) => setCats(success))
      .catch(({ error }) =>
        console.log("Критическая ошибка: " + error.message)
      );
  }, []);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-12">
        <Cats cats={cats} />
      </div>

      <Button className="mt-12 mb-8 mx-auto bg-blue rounded-md px-4 py-2 text-white whitespace-nowrap tracking-wide" />
    </div>
  );
};

export default CatsContainer;
