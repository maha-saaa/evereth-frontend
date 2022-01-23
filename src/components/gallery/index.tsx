import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import colors from "../../assets/colors";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 211,
    padding: {
      right: 183,
      left: 183,
    },
    "@media screen and (max-width: 1000px)": {
      marginTop: 90,
      padding: {
        right: 16,
        left: 16,
      },
    },
  },
  title: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
    marginBottom: 72,
    width: "70vw",
    "@media screen and (max-width: 1000px)": {
      marginBottom: 42,
    },
    "& span:nth-child(1)": {
      "@media screen and (max-width: 1000px)": {
        fontSize: 29,
      },
      fontSize: 48,
      marginBottom: 13,
    },
  },
});

function Gallery() {
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(false);

  const onChange = (isVisible: boolean) => {
    if (isVisible) {
      setVisibility(isVisible);
    }
  };

  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(80px)",
  });

  return (
    <VisibilitySensor onChange={onChange} resizeThrottle={1} partialVisibility>
      <section id="section-gallery" className={classes.container}>
        <animated.section className={classes.title} style={animation}>
          <span>EverETH around the world</span>
        </animated.section>
      </section>
    </VisibilitySensor>
  );
}

export default Gallery;
