import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import colors from "../../assets/colors";
import graph from "../../assets/images/Graph.svg";
import star from "../../assets/images/Star.svg";
import lock from "../../assets/images/Lock.svg";

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
      marginTop: 111,
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
    "@media screen and (max-width: 1000px)": {
      marginBottom: 42,
    },
    "& span:nth-child(1)": {
      "@media screen and (max-width: 1000px)": {
        fontSize: 29,
      },
      fontSize: 48,
      marginBottom: 13,
      whiteSpace: "pre-line",
      textAlign: "center",
    },
    "& span:nth-child(2)": {
      fontSize: 18,
      fontWeight: 400,
    },
  },
  features: {
    "@media screen and (max-width: 1000px)": {
      flexDirection: "column",
    },
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    "& div:nth-child(2)": {
      "@media screen and (max-width: 1000px)": {
        marginTop: 0,
      },
      marginTop: 57,
    },
  },
  card: {
    "@media screen and (max-width: 1000px)": {
      marginBottom: 40,
    },
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 285,
    height: 339,
    borderRadius: 12,
    backgroundColor: colors.grayWithOpacity,
    margin: {
      left: 16,
      right: 16,
    },
    textAlign: "center",
    padding: {
      left: 24,
      right: 24,
      top: 30,
      bottom: 24,
    },
    boxSizing: "border-box",
    "&:hover": {
      backgroundColor: colors.cardWithOpacity,
    },
  },
  cardIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grayWithOpacity2,
    borderRadius: 50,
    padding: 30,
    marginBottom: 24,
    "&:hover": {
      backgroundColor: colors.white,
    },
  },
  cardName: {
    color: colors.white,
    marginBottom: 16,
    fontSize: 22,
    fontWeight: 700,
  },
  cardDesc: {
    color: colors.lighterGray,
    whiteSpace: "pre-line",
  },
});

const data = [
  {
    key: 1,
    name: "Comfortable Ecosystem",
    desc: `You don’t need to claim your\n earned Ethereum.\n It’s automatically sent to your\n wallet.`,
    iconName: graph,
  },
  {
    key: 2,
    name: "10% Dividends",
    desc: `10% of every transaction value is taken and redistributed to all holders Hold EverETH tokens and earn Ethereum.`,
    iconName: star,
  },
  {
    key: 3,
    name: "Trusted Security",
    desc: `Fully transparent smart contract, audited by multiple firms with 24/7 live monitoring\n provided by CertiK Skynet.`,
    iconName: lock,
  },
];

function Features() {
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
      <section id="Features" className={classes.container}>
        <animated.section className={classes.title} style={animation}>
          <span>{`FULLY DECENTRALIZED\n ECOSYSTEM`}</span>
          <span>{`No smart contract ownership.`}</span>
        </animated.section>

        <animated.section className={classes.features} style={animation}>
          {data.map((temp) => (
            <div className={classes.card} key={temp.key}>
              <div className={classes.cardIcon}>
                <img src={temp.iconName} alt={temp.iconName} />
              </div>

              <span className={classes.cardName}>{temp.name}</span>

              <span className={classes.cardDesc}>{temp.desc}</span>
            </div>
          ))}
        </animated.section>
      </section>
    </VisibilitySensor>
  );
}

export default Features;
