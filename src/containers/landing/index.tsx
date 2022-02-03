import React from "react";
import { createUseStyles } from "react-jss";
import { useQuery } from "react-query";
import colors from "../../assets/colors";
import backgroundPattern from "../../assets/images/BG.png";
import Calc from "../../components/calc/calc";
import Buy from "../../components/buy";
import Features from "../../components/features";
import Intro from "../../components/intro";
import Navbar from "../../components/navbar";
import About from "../../components/about";
import Roadmap from "../../components/roadmap";
import Faq from "../../components/faq";
import Disclaimer from "../../components/disclaimer";
// import Testimonial from "../../components/testimonial";
import Swap from "../../components/swap";
import Footer from "../../components/footer";
import Rights from "../../components/rights";
import MediaGallery from "../../components/gallery";
import API from "../../services/http";
import { ethPriceUrl, everethDetailsUrl } from "../../constants/urls";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    // flex: 1,
    flexDirection: "column",
    backgroundColor: colors.background,
    backgroundSize: "contain",
    minHeight: window.innerHeight,
    padding: {
      top: 16,
    },
    boxSizing: "border-box",
    "@media screen and (min-width: 1000px)": {
      position: "absolute",
      left: 0,
      right: 0,
    },
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
      <Buy />
      <Roadmap />
      <MediaGallery />
      <Faq />
      <Disclaimer />
      {/* <Testimonial /> */}
      <Swap />
      <Footer />
      <Rights />
    </div>
  );
}

export default Landing;
