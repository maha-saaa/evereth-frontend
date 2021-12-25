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
import { useQuery } from "react-query";
import API from "../../services/http";
import { ethPriceUrl, everethDetailsUrl } from "../../constants/urls";

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

  const fetchEthPrice = async () => {
    const { data } = await API.get(ethPriceUrl);
    return data;
  };

  const fetchEverETHDetails = async () => {
    const { data } = await API.get(everethDetailsUrl);
    return data;
  };

  const { data: ethPrice, isLoading: ethPriceIsLoading } = useQuery(
    "fetchEthPrice",
    fetchEthPrice
  );

  const { data: everETHDetails, isLoading: everETHDetailsIsLoading } = useQuery(
    "fetchEverETHDetails",
    fetchEverETHDetails
  );

  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      <Navbar />
      <Intro {...{ everETHDetails, everETHDetailsIsLoading }} />
      <About />
      <Features />
      <Calc {...{ ethPrice, ethPriceIsLoading }} />
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
