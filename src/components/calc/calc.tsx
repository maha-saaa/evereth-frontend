import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import colors from "../../assets/colors";
import menu from "../../assets/images/menu.svg";

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
      flexDirection: "column",
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
    "@media screen and (max-width: 600px)": {
      textAlign: "center",
      fontSize: 32,
      marginBottom: 38,
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
    marginLeft: 20,
  },
  table: {
    width: "44vw",
    height: 442,
    borderRadius: 20,
    backgroundColor: colors.grayWithOpacity,
    marginBottom: 24,
    padding: 24,
    boxSizing: "border-box",
    "@media screen and (max-width: 600px)": {
      width: "90vw",
    },
  },
  tableBody: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
    marginBottom: 30,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: colors.grayWithOpacity,
    marginBottom: 41,
    paddingLeft: 24,
    borderRadius: 20,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 400,
    color: colors.lighterGray,
    flex: 1,
    alignSelf: "center",
  },
  tableData: {
    fontSize: 18,
    fontWeight: 600,
    color: colors.white,
    alignSelf: "center",
    flex: 1,
  },
  tablePurpleCell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.purple,
    borderRadius: 20,
    textAlign: "center",
    padding: 20,
    // width: 148,
    height: 64,
    boxSizing: "border-box",
  },
  slider: {
    width: "100%",
    // height: 122,
    borderRadius: 20,
    backgroundColor: colors.grayWithOpacity,
    padding: 24,
    boxSizing: "border-box",
  },
  selectedNumber: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: colors.white,
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 16,
  },
  range: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: {
      top: 8,
      left: 16,
      right: 16,
    },
    color: colors.lighterGray,
    fontSize: 16,
    fontWeight: 500,
  },
});

function Calc() {
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(false);
  const [selectedSliderValue, setSelectedSliderValue] = useState<number>(500);
  const [selectedEverETH, setSelectedEverETH] = useState(13.69);
  const min = 500;
  const max = 20;

  const onChange = (isVisible: boolean) => {
    if (isVisible) {
      setVisibility(isVisible);
    }
  };

  const onSliderChange = (value: number) => {
    console.log(`value`, value);
    setSelectedSliderValue(value);
    const profit = (value / 1000) * 0.07 * 1;
    setSelectedEverETH(profit);
  };

  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(80px)",
  });

  const renderTableData = () => {
    return (
      <div className={classes.tableBody}>
        <div className={classes.tableHeader}>
          <div style={{ alignSelf: "center", flex: 1 }}>
            <img src={menu} alt={"menu"} />
          </div>
          <div className={classes.tableHeaderText}>NVIDIA Geforce RTX 3090</div>
          <div className={classes.tableHeaderText}>
            Innosilicon Miner A10 Pro ETH (500Mh)
          </div>
          <div
            className={[classes.tableData, classes.tablePurpleCell].join(" ")}
          >
            EverETH
          </div>
        </div>
        <div className={classes.tableRow}>
          <span className={classes.tableHeaderText}>Income</span>
          <span className={classes.tableData}>$8.33/day</span>
          <span className={classes.tableData}>$33.79/day</span>
          <span
            className={[classes.tableData, classes.tablePurpleCell].join(" ")}
          >
            {`${selectedEverETH}/day`}
          </span>
        </div>
        <div className={classes.tableRow}>
          <span className={classes.tableHeaderText}>Electricity</span>
          <span className={classes.tableData}>$0.70/day</span>
          <span className={classes.tableData}>$2.76/day</span>
          <span
            className={[classes.tableData, classes.tablePurpleCell].join(" ")}
          >
            $0/day
          </span>
        </div>
        <div className={classes.tableRow}>
          <span className={classes.tableHeaderText}>Profit</span>
          <span className={classes.tableData}>$7.64/day*</span>
          <span className={classes.tableData}>$31.02/day*</span>
          <span
            className={[classes.tableData, classes.tablePurpleCell].join(" ")}
          >
            {`${selectedEverETH}/day**`}
          </span>
        </div>
      </div>
    );
  };

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
          <div className={classes.table}>{renderTableData()}</div>
          <div className={classes.slider}>
            <div className={classes.selectedNumber}>
              <span>Your Number:</span>
              <span>{`${selectedSliderValue} Billions`}</span>
            </div>
            <div
              style={{
                backgroundColor: colors.grayWithOpacity2,
                borderRadius: 20,
                padding: 4,
              }}
            >
              <Slider
                min={min}
                max={20000}
                onChange={onSliderChange}
                trackStyle={{ backgroundColor: colors.purple }}
                railStyle={{ backgroundColor: colors.gray }}
                handleStyle={{
                  backgroundColor: colors.purple,
                  borderColor: colors.purple,
                }}
              />
            </div>

            <div className={classes.range}>
              <span>{`${min} Billions`}</span>
              <span>{`${max} Trillions`}</span>
            </div>
            <div style={{ color: colors.lighterGray, textAlign: "center" }}>
              <span>results are based on 24 hour trading volume of 1M$</span>
            </div>
          </div>
        </section>
      </section>
    </VisibilitySensor>
  );
}

export default Calc;
