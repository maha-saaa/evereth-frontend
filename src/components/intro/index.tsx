import React, { useState } from "react";
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
import ethLogo from "../../assets/images/eth-logo.png";
import certik from "../../assets/images/certik.png";
import EverETHLogo from "../../assets/images/everEth.mp4";
import copy from "../../assets/images/copy.svg";
import Spinner from "../spinner";
import {
  BENZINGA,
  BINANCE,
  BLOOMBERG,
  CERTIK,
  COINGECKO,
  COINMARKETCAP,
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
    "@media screen and (max-width: 1000px)": {
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
    zIndex: 1000,
    "@media screen and (max-width: 1000px)": {
      minWidth: 288,
    },
  },
  copy: {
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
    backgroundColor: colors.grayWithOpacity,
    marginTop: 66,
    cursor: "pointer",
    padding: {
      left: 26,
      right: 26,
      top: 12,
      bottom: 12,
    },
    borderRadius: 20,
    "@media screen and (max-width: 1000px)": {
      alignItems: "center",
      fontSize: 12,
    },
    "& span:nth-child(1)": {
      color: colors.white,
    },
  },
  title: {
    color: colors.white,
    fontSize: 72,
    "@media screen and (max-width: 1000px)": {
      textAlign: "center",
      fontSize: 48,
    },
  },
  typist: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "@media screen and (max-width: 1000px)": {
      textAlign: "center",
    },
  },
  desc: {
    color: colors.text,
    fontSize: 18,
    margin: {
      top: 28,
    },
    "@media screen and (max-width: 1000px)": {
      textAlign: "center",
    },
    whiteSpace: "pre-line",
  },
  action: {
    display: "flex",
    flexDirection: "column",
    color: colors.white,
    margin: {
      top: 12,
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
    "@media screen and (max-width: 1000px)": {
      flexDirection: "column",
      alignItems: "center",
    },
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
        "@media screen and (max-width: 1000px)": {
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
      fontWeight: 500,
      color: colors.white,
    },
    "& div #n2": {
      fontSize: 14,
      fontWeight: 500,
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
    height: 49,
    boxSizing: "border-box",
    textDecoration: "none",
    color: colors.white,
    "@media screen and (max-width: 1000px)": {
      width: 100,
    },
    "& span": {
      fontSize: 18,
      fontWeight: 700,
      marginRight: 8,
    },
    "&:hover": {
      backgroundColor: colors.darkPurple,
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
    "@media screen and (max-width: 1000px)": {
      alignItems: "center",
    },
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
    "& div:nth-child(1)": {
      "@media screen and (max-width: 600px)": {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
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
        "@media screen and (max-width: 600px)": {
          fontSize: 32,
          fontWeight: 700,
        },
      },
    },
    "& div:nth-child(3)": {
      "@media screen and (max-width: 600px)": {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
  icons: {
    marginRight: 68,
    "@media screen and (max-width: 600px)": {
      marginRight: 0,
      marginBottom: 20,
    },
  },
  line: {
    flex: 1,
    color: colors.gray,
    opacity: 0.3,
  },
  image: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
    "& img:nth-child(1)": {
      "@media screen and (min-width: 1000px)": {
        position: "absolute",
        right: 283,
        top: 120,
      },
    },
    "& img:nth-child(2)": {
      "@media screen and (min-width: 1000px)": {
        position: "absolute",
        top: 500,
        right: 100,
      },
    },
  },
  video: {
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
  },
});

function Intro({ everETHDetails, everETHDetailsIsLoading }) {
  const classes = useStyles();

  const negativeDiff = everETHDetails?.diff24H < 0;

  return (
    <section className={classes.container}>
      <video autoPlay loop muted className={classes.video}>
        <source src={EverETHLogo} type="video/mp4" />
      </video>
      <section className={classes.info}>
        <span className={classes.title}>{`HOLD EVERETH`}</span>
        <Typist
          className={classes.typist}
          cursor={{ show: false }}
          avgTypingDelay={200}
        >
          <Typist.Delay ms={500} />
          <span className={classes.title}>{`EARN ETHEREUM`}</span>
        </Typist>
        <span className={classes.desc}>
          {`The fastest and easiest way to earn Ethereum in a fully decentralised ecosystem.`}
        </span>
        <div
          onClick={() =>
            navigator.clipboard.writeText(
              "0x16dCc0eC78E91e868DCa64bE86aeC62bf7C61037"
            )
          }
          className={classes.copy}
        >
          <span>{`0x27899282184a2c...0a70`}</span>
          <img src={copy} alt="copy" />
        </div>

        <div className={classes.action}>
          <div className={classes.prices}>
            <div className={classes.priceFirstRow}>
              <div className={classes.first}>
                <span className={classes.firstTitle}>EverETH PRICE</span>
                <div>
                  {everETHDetailsIsLoading ? (
                    <div style={{ height: 15 }}>
                      <Spinner />
                    </div>
                  ) : (
                    <span id="n1">{`$${Number(
                      everETHDetails?.price.toFixed(20)
                    )?.toFixed(11)}`}</span>
                  )}
                  {everETHDetailsIsLoading ? (
                    <div style={{ height: 15 }}>
                      <Spinner />
                    </div>
                  ) : (
                    <span
                      id="n2"
                      style={{
                        color: negativeDiff ? "red" : colors.lightergreen,
                      }}
                    >{`${(everETHDetails?.diff24H).toFixed(2)}%`}</span>
                  )}
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
                {everETHDetailsIsLoading ? (
                  <div style={{ height: 15 }}>
                    <Spinner />
                  </div>
                ) : (
                  <span>{`$${(everETHDetails?.marketCap * 0.000001).toFixed(
                    2
                  )}M`}</span>
                )}
                <span>MKT. CAP</span>
              </div>
              <div>
                {everETHDetailsIsLoading ? (
                  <div style={{ height: 15 }}>
                    <Spinner />
                  </div>
                ) : (
                  <span>{`$${(everETHDetails?.volume24H * 0.000001).toFixed(
                    2
                  )}M`}</span>
                )}
                <span>24H VOLUME</span>
              </div>
              <div>
                {everETHDetailsIsLoading ? (
                  <div style={{ height: 15 }}>
                    <Spinner />
                  </div>
                ) : (
                  <span>{`${Math.round(
                    everETHDetails?.holders * 0.001
                  )}K`}</span>
                )}
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
            <a href={BINANCE} target="_blank" rel="noreferrer noopener">
              <img src={binance} alt="Binance" className={classes.icons} />
            </a>
            <a href={COINMARKETCAP} target="_blank" rel="noreferrer noopener">
              <img
                src={coinMarket}
                alt="CoinMarketCap"
                className={classes.icons}
              />
            </a>
            <a href={COINGECKO} target="_blank" rel="noreferrer noopener">
              <img src={coinGecko} alt="CoinGecko" className={classes.icons} />
            </a>
            <a href={CERTIK} target="_blank" rel="noreferrer noopener">
              <img src={certik} alt="CoinGecko" />
            </a>
          </div>
          <div>
            <hr className={classes.line} />
            <span>Featured in</span>
            <hr className={classes.line} />
          </div>
          <div>
            <a href={BLOOMBERG} target="_blank" rel="noreferrer noopener">
              <img src={bloomberg} alt="Bloomberg" className={classes.icons} />
            </a>
            <a href={YAHOO} target="_blank" rel="noreferrer noopener">
              <img src={yahoo} alt="yahoo" className={classes.icons} />
            </a>
            <a href={BENZINGA} target="_blank" rel="noreferrer noopener">
              <img src={benzinga} alt="Benzinga" />
            </a>
          </div>
        </div>
      </section>

      <section className={classes.image}>
        <img src={everLogo} alt="everLogo" />
        <img src={ethLogo} alt="ethLogo" />
      </section>
    </section>
  );
}

export default Intro;
