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
import Testimonial from "../../components/testimonial";
import Swap from "../../components/swap";
import Contact from "../../components/contact";
import Rights from "../../components/rights";

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
    },
    boxSizing: "border-box",
  },
  line: {
    flex: 1,
    color: colors.gray,
    width: "100vw",
    marginTop: 70,
    opacity: 0.3,
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
      <Testimonial />
      <Swap />
      <hr className={classes.line} />
      <Contact />
      <Rights />
    </div>
  );
}

export default Landing;
