import { useEffect, useState } from "react";

export function withActiveHeart(Component) {
  const WithActiveHeart = function (props) {
    const [active, setActive] = useState(()=>false);

    const { favoured, ...otherProps } = props;
    console.log("withActiveHeart ", props);


    useEffect(() => {
      if (favoured) setActive(true);
    }, [favoured]);

    return (
      <Component
        active={active}
        setActive={(e) => { console.log('setActive', e); return setActive(e)}}
        favoured={favoured}
        {...otherProps}
      />
    );
  };

  WithActiveHeart.displayName = "withActiveHeart";

  return WithActiveHeart;
}
