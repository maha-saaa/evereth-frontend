import React from "react";
import { createUseStyles } from "react-jss";
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
    flex: 2,
  },
});

function Calc() {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <section className={classes.info}>
        <span>Why EverEth?</span>
        <span>{`Planet.People.\nProfit.`}</span>
        <span>
          Unlike mining EverETH is programmed to strive on providing investors
          the ability to earn ethereum, without damaging the enviroment or
          theirt wallets.
        </span>
        <span>
          Become a part of the Everth family today, and earn Ethereum passively
          for the rest of your life.
        </span>
      </section>

      <section className={classes.calculator}></section>
    </section>
  );
}

export default Calc;
