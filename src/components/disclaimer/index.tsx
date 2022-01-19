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
    "& span:nth-child(2)": {
      fontSize: 16,
      fontWeight: 400,
      color: colors.text,
      textAlign: "center",
      marginTop: 20,
    },
  },
});

function Disclaimer() {
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
      <section id="section-disclaimer" className={classes.container}>
        <animated.section className={classes.title} style={animation}>
          <span>Disclaimer</span>
          <span>
            The Content shared on this website is for information purpose only
            and, thus, should not be considered as financial advice.
            Trading/Investing is risky and you should never invest more than you
            can afford to lose. Cryptocurrencies are risky. Never invest more
            than you can afford to lose. You alone assume the sole
            responsibility of evaluating the merits and risks associated with
            the use of any information or other Content on the Site before
            making any decisions based on such information or other Content.
          </span>
        </animated.section>
      </section>
    </VisibilitySensor>
  );
}

export default Disclaimer;
