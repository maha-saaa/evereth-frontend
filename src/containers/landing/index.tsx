import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";
import backgroundPattern from "../../assets/images/pattern.svg";
import Calc from "../../components/calc/calc";
import Features from "../../components/features";
import Intro from "../../components/intro";
import Navbar from "../../components/navbar";
import About from "../../components/about";
import Roadmap from "../../components/roadmap";
import Faq from "../../components/faq";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.background,
    backgroundSize: "cover",
    minHeight: window.innerHeight,
    padding: {
      top: 16,
      right: "4rem",
      left: "4rem",
    },
  },
});

function Landing() {
  const classes = useStyles();
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      <Navbar />
      <Intro />
      <About />
      <Features />
      <Calc />
      <Roadmap />
      <Faq />
    </div>
  );
}

export default Landing;
