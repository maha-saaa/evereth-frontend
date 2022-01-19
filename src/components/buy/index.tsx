import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    // alignItems: "center",
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
});

function Buy() {
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
      <section id="section-buy" className={classes.container}>
        <animated.section style={animation}>
          <iframe
            title="EverEth"
            width="100%"
            height={700}
            src="https://www.flooz.trade/embedded/0x16dcc0ec78e91e868dca64be86aec62bf7c61037/?backgroundColor=transparent"
            style={{ border: "none" }}
          />
        </animated.section>
      </section>
    </VisibilitySensor>
  );
}

export default Buy;
