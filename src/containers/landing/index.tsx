import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";
import backgroundPattern from "../../assets/images/BG-Pattern.png";
import Calc from "../../components/calc/calc";
import Features from "../../components/features";
import Intro from "../../components/intro";
import Navbar from "../../components/navbar";
import About from "../../components/about";
import Roadmap from "../../components/roadmap";
import Faq from "../../components/faq";
import Testimonial from "../../components/testimonial";
import Swap from "../../components/swap";
import Footer from "../../components/footer";
import Rights from "../../components/rights";
import axios from "axios";
import { useQuery } from "react-query";

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

const url = "http://162.0.211.97:4000/api/assets/evereth";

const instance = axios.create({
  timeout: 1000,
});

function Landing() {
  const classes = useStyles();
  
  const fetchEverETH = async () => {
    const { data } = await instance.get(url);
    return data;
  };

  const { data, error, isError, isLoading } = useQuery(
    "everETHData",
    fetchEverETH
  );
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

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
      <Footer />
      <Rights />
    </div>
  );
}

export default Landing;
