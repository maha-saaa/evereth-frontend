import React from "react";
import { createUseStyles } from "react-jss";
import Typist from "react-typist";
import colors from "../../assets/colors";
import binance from "../../assets/images/binance.svg";
import coinMarket from "../../assets/images/coinMarket.svg";
import coinGecko from "../../assets/images/coinGecko.svg";
import bloomberg from "../../assets/images/bloomberg.svg";
import yahoo from "../../assets/images/yahoo.svg";
import benzinga from "../../assets/images/benzinga.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import everLogo from "../../assets/images/ever-logo.svg";
import ethLogo from "../../assets/images/eth-logo.svg";

import {
  BENZINGA,
  BLOOMBERG,
  EVERETHAPP,
  EVERETHSWAP,
  YAHOO,
} from "../../constants/urls";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
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
    "@media screen and (max-width: 600px)": {
      minWidth: 288,
    },
  },
  title: {
    color: colors.white,
    fontSize: 72,
    "@media screen and (max-width: 600px)": {
      textAlign: "center",
      fontSize: 48,
    },
  },
  desc: {
    color: colors.text,
    fontSize: 18,
    margin: {
      top: 28,
    },
    "@media screen and (max-width: 600px)": {
      textAlign: "center",
    },
  },
  action: {
    display: "flex",
    flexDirection: "column",
    color: colors.white,
    margin: {
      top: 45,
    },
    flex: 1,
  },
  prices: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    boxSizing: "border-box",
    backgroundColor: colors.grayWithOpacity,
    // width: "44vw",
    height: 317,
    borderRadius: 20,
    padding: 24,
  },
  priceFirstRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  priceSecondRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "& div": {
      display: "flex",
      flexDirection: "column",
      marginRight: 40,
      "& span:nth-child(1)": {
        fontSize: 26,
        fontWeight: 500,
        "@media screen and (max-width: 600px)": {
          fontSize: 18,
        },
      },
      "& span:nth-child(2)": {
        fontSize: 14,
        fontWeight: 600,
        color: colors.lighterGray,
        marginTop: 8,
      },
    },
  },
  first: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& div #n1": {
      fontSize: 32,
      color: colors.white,
    },
    "& div #n2": {
      fontSize: 14,
      color: colors.lightergreen,
      marginLeft: 8,
    },
  },
  firstTitle: {
    fontSize: 14,
    color: colors.lighterGray,
    marginBottom: 8,
  },
  second: {
    backgroundColor: colors.purple,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 40,
    width: "10vw",
    textDecoration: "none",
    color: colors.white,
    "@media screen and (max-width: 600px)": {
      width: 100,
    },
    "& span": {
      fontSize: 18,
      fontWeight: 700,
      marginRight: 8,
    },
    "&:hover": {
      backgroundColor: colors.lighterGray,
      color: colors.purple,
      fontWeight: 700,
    },
  },
  dashboard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid white",
    borderRadius: 100,
    height: 65,
    marginTop: 20,
    textDecoration: "none",
    color: colors.white,
    "&:hover": {
      backgroundColor: colors.grayWithOpacity2,
      fontWeight: 700,
    },
  },
  featured: {
    display: "flex",
    flexDirection: "column",
    marginTop: 78,
    "& a": {
      flex: 1,
      textDecoration: "none",
      color: colors.white,
    },
    "& div": {
      display: "flex",
      alignItems: "center",
      color: colors.text,
    },
    "& div:nth-child(2)": {
      margin: {
        top: 22,
        bottom: 22,
      },
      "& span": {
        opacity: 0.3,
        margin: {
          left: 11,
          right: 11,
        },
      },
    },
  },
  line: {
    flex: 1,
    color: colors.gray,
    opacity: 0.3,
  },
  image: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
    marginLeft: 100,
    "& img:nth-child(1)": {
      alignSelf: "flex-start",
      marginRight: 8,
    },
    "& img:nth-child(2)": {
      alignSelf: "center",
    },
  },
});

function Intro() {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <section className={classes.info}>
        <span className={classes.title}>Hold EverETH</span>
        <Typist>
          <span className={classes.title}>Earn Ethereum</span>
        </Typist>
        <span className={classes.desc}>
          The fastest and easiest way to earn Ethereum in a fully decentralised
          ecosystem.
        </span>

        <div className={classes.action}>
          <div className={classes.prices}>
            <div className={classes.priceFirstRow}>
              <div className={classes.first}>
                <span className={classes.firstTitle}>WILD PRICE</span>
                <div>
                  <span id="n1">$4.211</span>
                  <span id="n2">3.74%</span>
                </div>
              </div>
              <a
                className={classes.second}
                href={EVERETHSWAP}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>BUY</span>
                <img src={arrowRight} alt=">" color={colors.green} />
              </a>
            </div>
            <div className={classes.priceSecondRow}>
              <div>
                <span>$210.2M</span>
                <span>MKT. CAP</span>
              </div>
              <div>
                <span>$12.7M</span>
                <span>24H VOLUME</span>
              </div>
              <div>
                <span>$7.99K</span>
                <span>HOLDERS</span>
              </div>
            </div>
          </div>
          <a
            className={classes.dashboard}
            href={EVERETHAPP}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>Go to Dashboard</span>
          </a>
        </div>

        <div className={classes.featured}>
          <div>
            <a href={EVERETHSWAP} target="_blank" rel="noreferrer noopener">
              <img
                src={binance}
                alt="Binance"
                style={{ width: "10vw", height: 31, marginRight: 68 }}
              />
            </a>
            <a href={EVERETHSWAP} target="_blank" rel="noreferrer noopener">
              <img
                src={coinMarket}
                alt="CoinMarketCap"
                style={{ width: "14vw", height: 43, marginRight: 68 }}
              />
            </a>
            <a href={EVERETHSWAP} target="_blank" rel="noreferrer noopener">
              <img
                src={coinGecko}
                alt="CoinGecko"
                style={{ width: "9vw", height: 28 }}
              />
            </a>
          </div>
          <div>
            <hr className={classes.line} />
            <span>Featured in</span>
            <hr className={classes.line} />
          </div>
          <div>
            <a href={BLOOMBERG} target="_blank" rel="noreferrer noopener">
              <img
                src={bloomberg}
                alt="Bloomberg"
                style={{ width: "12vw", height: 33, marginRight: 68 }}
              />
            </a>
            <a href={YAHOO} target="_blank" rel="noreferrer noopener">
              <img
                src={yahoo}
                alt="yahoo"
                style={{ width: "7vw", height: 27, marginRight: 68 }}
              />
            </a>
            <a href={BENZINGA} target="_blank" rel="noreferrer noopener">
              <img
                src={benzinga}
                alt="Benzinga"
                style={{ width: "12vw", height: 17 }}
              />
            </a>
          </div>
        </div>
      </section>

      <section className={classes.image}>
        {/* <video autoPlay loop muted style={{ width: 500, height:500 }}>
          <source
            src={EverETHLogo}
            type="video/mp4"
            style={{ width: 50, height: 50 }}
          />
        </video> */}
        <img src={everLogo} alt="everLogo" />
        <img src={ethLogo} alt="ethLogo" />
      </section>
    </section>
  );
}

export default Intro;
