import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";
import arrowRight from "../../assets/images/arrow-right.svg";
import { EVERETHAPP } from "../../constants/urls";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 116,
    padding: {
      right: 183,
      left: 183,
    },
    "@media screen and (max-width: 600px)": {
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
    "@media screen and (max-width: 600px)": {
      textAlign: "center",
    },
  },
  desc: {
    color: colors.text,
    fontSize: 16,
    margin: {
      top: 28,
    },
    "@media screen and (max-width: 600px)": {
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
    "@media screen and (max-width: 600px)": {
      alignSelf: "center",
      width: 237,
    },
  },
  image: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
});

function Swap() {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <section className={classes.info}>
        <span className={classes.title}>
          {`Manage your dividends\n in one Place`}
        </span>
        <span className={classes.desc}>EverETH Swap is Coming soon</span>

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

      <section className={classes.image}></section>
    </section>
  );
}

export default Swap;
