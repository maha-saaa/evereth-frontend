import React from "react";
import { useSpring, animated } from "react-spring";

export default function Expand({ children, expanded, config }) {
  const elementRef = React.useRef<any>();
  const heightRef = React.useRef(expanded ? "auto" : "0px");
  const [isAnimating, setIsAnimating] = React.useState(false);

  const [style, setStyle]: any = useSpring(() => ({
    onRest: () => setIsAnimating(false),
    config,
  }));

  React.useEffect(() => {
    const { offsetHeight, scrollHeight } = elementRef.current;
    setStyle({ height: offsetHeight + "px", immediate: true });
    setStyle({
      height: (expanded ? scrollHeight : 0) + "px",
      immediate: false,
    });
    setIsAnimating(true);
    heightRef.current = expanded ? "auto" : "0px";
  }, [expanded, setStyle]);

  return (
    <animated.div
      ref={elementRef}
      style={{
        overflow: "hidden",
        height: isAnimating ? style.height : heightRef.current,
      }}
    >
      {children}
    </animated.div>
  );
}
