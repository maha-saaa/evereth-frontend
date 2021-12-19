import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import colors from "../../assets/colors";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    // height: "30%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 211,
    padding: {
      right: 183,
      left: 183,
    },
    "@media screen and (max-width: 600px)": {
      padding: {
        right: 16,
        left: 16,
      },
    },
  },
  info: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "@media screen and (max-width: 600px)": {
      textAlign: "center",
      fontSize: 32,
    },
    "& span:nth-child(1)": {
      fontSize: 20,
      color: colors.lighterGray,
      marginBottom: 24,
    },
    "& span:nth-child(2)": {
      fontSize: 49,
      fontWeight: 700,
      color: colors.white,
      marginBottom: 16,
      whiteSpace: "pre-line",
    },
    "& span:nth-child(3)": {
      fontSize: 16,
      color: colors.text,
      marginBottom: 30,
    },
    "& span:nth-child(4)": {
      fontSize: 16,
      color: colors.text,
    },
  },
  calculator: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  card: {
    width: "90%",
    height: 442,
    borderRadius: 20,
    backgroundColor: colors.grayWithOpacity,
    marginLeft: 100,
    padding: 24,
  },
});

function Calc() {
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
      <section className={classes.container}>
        <animated.section className={classes.info} style={animation}>
          <span>Why EverETH?</span>
          <span>{`Planet.People.\nProfit.`}</span>
          <span>
            Unlike mining EverETH is programmed to strive on providing investors
            the ability to earn ethereum, without damaging the enviroment or
            theirt wallets.
          </span>
          <span>
            Become a part of the Everth family today, and earn Ethereum
            passively for the rest of your life.
          </span>
        </animated.section>

        <section className={classes.calculator}>
          <div className={classes.card}></div>
          <Slider />
        </section>
      </section>
    </VisibilitySensor>
  );
}

export default Calc;
