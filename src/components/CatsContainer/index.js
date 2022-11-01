import Cats from "../Cats";
import Cat from "../Cat";
import Button from "../Button";
import Heart from "../Heart";
import { serverGetCats } from "../../api";
import { useEffect, useState } from "react";

const CatsContainer = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    Promise.resolve()
      .then(() => serverGetCats(3)) // 15
      .then(({ success }) => setCats(success))
      .catch(({ error }) =>
        console.log("Критическая ошибка: " + error.message)
      );
  }, []);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-12">
        {cats &&
          cats.map(({ id, url }) => {
            return (
              <article
                key={id}
                className="bg-gray-200 relative article-cats"
              >
                <img
                  src={url}
                  alt={`${id}-cat`}
                  className="w-56 h-56 object-cover relative"
                />

                <Heart className="text-orange absolute z-[2] bottom-3 right-3 cursor-pointer" />
              </article>
            );
          })}
      </div>

      <Button className="mt-12 mb-8 mx-auto bg-blue rounded-md px-4 py-2 text-white whitespace-nowrap" />

      {/* <Cats>
        <Cat />
      </Cats> */}
    </div>
  );
};

export default CatsContainer;
