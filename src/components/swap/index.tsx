import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import colors from "../../assets/colors";
import arrowRight from "../../assets/images/arrow-right.svg";
import { EVERETHAPP } from "../../constants/urls";
import iphone from "../../assets/images/iphone.png";
import iphoneSec from "../../assets/images/iphone-sec.png";
import card from "../../assets/images/Card-Bg.png";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 316,
    padding: {
      right: 183,
      left: 183,
      top: 74,
      bottom: 74,
    },
    "@media screen and (min-width: 1000px)": {
      backgroundImage: `url(${card})`,
      backgroundSize: "cover",
    },
    "@media screen and (max-width: 1000px)": {
      marginTop: 111,
      padding: {
        right: 16,
        left: 16,
      },
      flexDirection: "column",
    },
  },
  info: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  title: {
    color: colors.white,
    fontSize: 48,
    whiteSpace: "pre-line",
    "@media screen and (max-width: 1000px)": {
      textAlign: "center",
    },
  },
  desc: {
    color: colors.text,
    fontSize: 16,
    margin: {
      top: 28,
    },
    "@media screen and (max-width: 1000px)": {
      textAlign: "center",
    },
  },
  action: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.purple,
    borderRadius: 100,
    width: "20vw",
    height: 65,
    margin: {
      top: 45,
    },
    color: colors.white,
    textDecoration: "none",
    "& span": {
      marginRight: 8,
    },
    "@media screen and (max-width: 1000px)": {
      alignSelf: "center",
      width: 237,
    },
    "&:hover": {
      backgroundColor: colors.darkPurple,
      fontWeight: 700,
    },
  },
  image: {
    display: "flex",
    flex: 1,
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
    width: 878,
    height: 625,
    position: "absolute",
    bottom: 5,
    right: 10,
  },
  imageSec: {
    display: "none",
    flex: 1,
    "@media screen and (max-width: 1000px)": {
      display: "flex",
      flex: 1,
    },
  },
});

function Swap() {
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
      <animated.section className={classes.container} style={animation}>
        <section className={classes.imageSec}>
          <img src={iphoneSec} alt={"iphone"} style={{ width: "100%" }} />
        </section>
        <section className={classes.info}>
          <span className={classes.title}>
            {`Manage your dividends\n in one place`}
          </span>
          <span
            className={classes.desc}
          >{`EverETH Wallet is Coming soon.`}</span>

          <a
            className={classes.action}
            href={EVERETHAPP}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>Let's get Started</span>
            <img src={arrowRight} alt=">" />
          </a>
        </section>

        <section className={classes.image}>
          <img src={iphone} alt={"iphone"} />
        </section>
      </animated.section>
    </VisibilitySensor>
  );
}

export default Swap;
