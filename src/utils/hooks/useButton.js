import { useCallback, useEffect, useState } from "react";

export function useButton({ firstState, callback = () => {} }) {
  const [showButton, setShowButton] = useState(firstState);

  const memoizedCallBack = useCallback(() => {
    callback();
  }, [callback]);

  // Первая загрузка и далее уже дозагрузка по кнопке
  useEffect(() => {
    setShowButton(true);
    memoizedCallBack();
  }, []);

  return {
    showButton,
  };
}

// export function useButton({ firstState, callback }) {
//   const [showButton, setShowButton] = useState(firstState);

//   // Первая загрузка и далее уже дозагрузка по кнопке
//   useEffect(() => {
//     setShowButton(true);
//     callback?.();
//   }, []);

//   return {
//     showButton,
//   };
// }
