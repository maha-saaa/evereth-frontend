import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import colors from "../../assets/colors";
import world from "../../assets/images/world.svg";

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
      justifyContent: "center",
      marginTop: 111,
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
    minWidth: 340,
    backgroundSize: "contain",
  },
  title: {
    color: colors.white,
    fontSize: 48,
    "@media screen and (max-width: 600px)": {
      textAlign: "center",
      fontSize: 32,
    },
  },
  desc: {
    color: colors.text,
    fontSize: 18,
    margin: {
      top: 28,
    },
    "@media screen and (max-width: 600px)": {
      textAlign: "center",
    },
  },
  count: {
    display: "flex",
    flexDirection: "row",
    color: colors.white,
    justifyContent: "space-between",
    marginTop: 93,
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
      justifyItems: "center",
      textAlign: "center",
      marginTop: 42,
    },
    "& div": {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      marginRight: 72,
      "@media screen and (max-width: 600px)": {
        marginRight: 0,
        marginBottom: 40,
      },
      "& span:nth-child(1)": {
        fontsize: 48,
        marginBottom: 11,
      },
      "& span:nth-child(2)": {
        fontsize: 18,
      },
    },
  },
  image: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    paddingLeft: 50,
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
  },
  mobileImage: {
    "@media screen and (max-width: 600px)": {
      backgroundImage: `url(${world})`,
    },
  },
});

const data = [
  { key: 1, name: "$3M+", desc: "paid so far in\n Binance-peg Ethereum" },
  { key: 2, name: "20K+", desc: "Comminuty of\n EverETH holders" },
  { key: 3, name: "3", desc: "Blockchain summmit\n sponsership" },
];

function About() {
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
    <VisibilitySensor
      onChange={onChange}
      partialVisibility
      resizeThrottle={1}
    >
      <section id="section-about" className={classes.container}>
        <animated.section className={classes.info} style={animation}>
          <div
            className={[classes.info, classes.mobileImage].join(" ")}
          >
            <span className={classes.title}>Worldwide devidend</span>
            <span className={classes.title}>payments in</span>
            <span className={classes.title}>Ethereum</span>
            <span className={classes.desc}>
              The safest and easiest way to earn WTH on Binance Smart Chain
              Passively. and easiest way to earn Ethereum in a fully
              decentralised ecosystem.
            </span>
          </div>

          <div className={classes.count}>
            {data.map((temp) => (
              <div key={temp.key}>
                <span style={{ fontSize: 48 }}>{temp.name}</span>
                <span style={{ fontSize: 18, whiteSpace: "pre-line" }}>
                  {temp.desc}
                </span>
              </div>
            ))}
          </div>
        </animated.section>

        <animated.section className={classes.image} style={animation}>
          <img src={world} alt="world" style={{ width: "50vw", height: 439 }} />
        </animated.section>
      </section>
    </VisibilitySensor>
  );
}

export default About;
