import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 211,
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

    "& span:nth-child(1)": {
      "@media screen and (max-width: 600px)": {
        fontSize: 29,
      },
      fontSize: 48,
      marginBottom: 13,
    },
    "& span:nth-child(2)": {
      fontSize: 18,
      color: colors.text,
      textAlign: "center",
    },
  },
  questions: {
    backgroundColor: colors.grayWithOpacity,
    width: "70vw",
    height: 392,
    borderRadius: 20,
  },
});

function Faq() {
  const classes = useStyles();
  return (
    <section id="section-faq" className={classes.container}>
      <section className={classes.title}>
        <span>FAQ</span>
        <span>
          Below we’ve provided a bit of EverEth Token, cryptocurrencies, and few
          others. If you have any other questions, please get in touch using the
          contact form below.
        </span>
      </section>

      <section className={classes.questions}></section>
    </section>
  );
}

export default Faq;
