import { useState, useEffect } from "react";

export function useHeart(firstState = false, firstActive = false) {
  const [active, setActive] = useState(firstState);

  useEffect(() => {
    if (firstActive) setActive(true);
  }, [firstActive]);

  return [active, setActive];
}
