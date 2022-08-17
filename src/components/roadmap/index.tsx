import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import colors from "../../assets/colors";
import checkbox from "../../assets/images/TickSquare.svg";
import one from "../../assets/images/1.svg";
import two from "../../assets/images/2.svg";
import three from "../../assets/images/3.svg";

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
    },
  },
  steps: {
    "@media screen and (max-width: 1000px)": {
      flexDirection: "column",
      marginLeft: 0,
    },
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 134,
    "& div:nth-child(1)": {
      "& div #number": {
        fontSize: 82,
        fontWeight: 200,
        color: colors.orange,
      },
    },
    "& div:nth-child(2)": {
      "& div #number": {
        fontSize: 82,
        fontWeight: 200,
        color: colors.green,
      },
    },
    "& div:nth-child(3)": {
      "& div #number": {
        fontSize: 82,
        fontWeight: 200,
        color: colors.pink,
      },
    },
  },
  step: {
    "@media screen and (max-width: 1000px)": {
      marginBottom: 40,
    },
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    margin: {
      left: 50,
      right: 50,
    },
  },
  stepNumber: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grayWithOpacity2,
    borderRadius: 12,
    width: 111,
    height: 111,
    marginBottom: 24,
    "&:hover": {
      backgroundColor: colors.cardWithOpacity,
    },
  },
  stepName: {
    color: colors.white,
    marginBottom: 16,
    fontSize: 22,
    fontWeight: 700,
  },
  stepDesc: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    color: colors.lighterGray,
    width: 258,
    margin: {
      top: 5,
      bottom: 5,
    },
    "& span": {
      flex: 1,
    },
  },
});

const data = [
  {
    key: 1,
    name: "Phase One",
    icon: one,
    list: [
      {
        key: 11,
        title: "Design and Structure",
        checked: true,
      },
      {
        key: 12,
        title: "Website Launch",
        checked: true,
      },
      {
        key: 13,
        title: "Public Presale",
        checked: true,
      },
      {
        key: 14,
        title: "Marketing Campaign",
        checked: true,
      },
      {
        key: 15,
        title: "CoinGecko Listing",
        checked: true,
      },
      {
        key: 16,
        title: " CoinMarketCap Listing",
        checked: true,
      },
      {
        key: 17,
        title: "Smart Contract Audit",
        checked: true,
      },
    ],
  },
  {
    key: 2,
    name: "Phase Two",
    icon: two,
    list: [
      {
        key: 21,
        title: "Dividend Tracker Dashboard",
        checked: true,
      },
      {
        key: 22,
        title: "EverETH Swap",
        checked: true,
      },
      {
        key: 23,
        title: "AIBC Europe Sponsership",
        checked: true,
      },
      {
        key: 24,
        title: "100% Decentralization",
        checked: true,
      },
    ],
  },
  {
    key: 3,
    name: "Phase Three",
    icon: three,
    list: [
      {
        key: 31,
        title: "Charity Events",
        checked: true,
      },
      {
        key: 32,
        title: "CEX Listing",
        checked: false,
      },
      {
        key: 33,
        title: "NFT Collection",
        checked: false,
      },
      {
        key: 34,
        title: "EverETH Wallet",
        checked: false,
      },
      {
        key: 35,
        title: "Partnerships",
        checked: false,
      },
    ],
  },
];

function Roadmap() {
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
      <section id="Roadmap" className={classes.container}>
        <animated.section className={classes.title} style={animation}>
          <span>Roadmap</span>
        </animated.section>

        <section className={classes.steps}>
          {data.map((temp) => (
            <div className={classes.step} key={temp.key}>
              <div className={classes.stepNumber}>
                {/* <span id="number">{temp.key}</span> */}
                <img src={temp.icon} alt={`${temp.key}`} />
              </div>
              <span className={classes.stepName}>{temp.name}</span>
              {temp?.list?.map((item) => (
                <animated.div
                  className={classes.stepDesc}
                  key={item.key}
                  style={animation}
                >
                  <span>{item.title}</span>
                  {item.checked ? (
                    <img
                      src={checkbox}
                      alt="checkbox"
                      style={{ width: 16, height: 16 }}
                    />
                  ) : null}
                </animated.div>
              ))}
            </div>
          ))}
        </section>
      </section>
    </VisibilitySensor>
  );
}

export default Roadmap;
