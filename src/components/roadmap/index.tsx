import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import colors from "../../assets/colors";
import checkbox from "../../assets/images/TickSquare.svg";

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
    "@media screen and (max-width: 600px)": {
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

    "& span:nth-child(1)": {
      "@media screen and (max-width: 600px)": {
        fontSize: 29,
      },
      fontSize: 48,
      marginBottom: 13,
    },
    "& span:nth-child(2)": {
      fontSize: 16,
      whiteSpace: "pre-line",
      textAlign: "center",
      color: colors.text,
    },
  },
  steps: {
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
    },
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 60,
    "& div:nth-child(1)": {
      "& div #number": {
        fontSize: 82,
        color: colors.orange,
      },
    },
    "& div:nth-child(2)": {
      "& div #number": {
        fontSize: 82,
        color: colors.green,
      },
    },
    "& div:nth-child(3)": {
      "& div #number": {
        fontSize: 82,
        color: colors.pink,
      },
    },
  },
  step: {
    "@media screen and (max-width: 600px)": {
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
    list: [
      {
        key: 31,
        title: "NFT Collectione",
        checked: false,
      },
      {
        key: 32,
        title: "Expanding Community",
        checked: false,
      },
      {
        key: 33,
        title: "Charity Events",
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
    setVisibility(isVisible);
  };

  const animation = useSpring({
    opacity: isVisible ? 1 : 0.1,
    transform: isVisible ? "translateY(0px)" : "translateY(80px)",
  });

  return (
    <VisibilitySensor onChange={onChange} resizeThrottle={1}>
      <section id="section-roadmap" className={classes.container}>
        <animated.section className={classes.title} style={animation}>
          <span>Road Map</span>
          <span>
            {`Soon, we have another exciting news for our\n investors that we will
          launch our own swap like pancake swap called EverETH.`}
          </span>
        </animated.section>

        <section className={classes.steps}>
          {data.map((temp) => (
            <div className={classes.step} key={temp.key}>
              <div className={classes.stepNumber}>
                <span id="number">{temp.key}</span>
              </div>
              <span className={classes.stepName}>{temp.name}</span>
              {temp?.list?.map((item) => (
                <div className={classes.stepDesc} key={item.key}>
                  <span>{item.title}</span>
                  {item.checked ? (
                    <img
                      src={checkbox}
                      alt="checkbox"
                      style={{ width: 16, height: 16 }}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </section>
      </section>
    </VisibilitySensor>
  );
}

export default Roadmap;
