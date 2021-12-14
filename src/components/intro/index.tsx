import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";
import binance from "../../assets/images/binance.svg";
import coinMarket from "../../assets/images/coinMarket.svg";
import coinGecko from "../../assets/images/coinGecko.svg";
import bloomberg from "../../assets/images/bloomberg.svg";
import yahoo from "../../assets/images/yahoo.svg";
import benzinga from "../../assets/images/benzinga.svg";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 116,
    padding: {
      right: 40,
      left: 40,
    },
  },
  info: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  title: {
    color: colors.white,
    fontSize: 72,
  },
  desc: {
    color: colors.text,
    fontSize: 18,
    margin: {
      top: 28,
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
  },
  dashboard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid white",
    borderRadius: 100,
    // width: "12vw",
    height: 65,
    marginTop: 20,
  },
  featured: {
    display: "flex",
    flexDirection: "column",
    marginTop: 78,
    "& img": {
      flex: 1,
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
  },
});

function Intro() {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <section className={classes.info}>
        <span className={classes.title}>Hold EverEth</span>
        <span className={classes.title}>Earn</span>
        <span className={classes.title}>Ethereum</span>
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
              <div className={classes.second}>
                <span>BUY</span>
              </div>
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
          <div className={classes.dashboard}>
            <span>Go to Dashboard</span>
          </div>
        </div>

        <div className={classes.featured}>
          <div>
            <img
              src={binance}
              alt="Binance"
              style={{ width: "10vw", height: 31, marginRight: 68 }}
            />
            <img
              src={coinMarket}
              alt="CoinMarketCap"
              style={{ width: "14vw", height: 43, marginRight: 68 }}
            />
            <img
              src={coinGecko}
              alt="CoinGecko"
              style={{ width: "9vw", height: 28 }}
            />
          </div>
          <div>
            <hr className={classes.line} />
            <span>Featured in</span>
            <hr className={classes.line} />
          </div>
          <div>
            <img
              src={bloomberg}
              alt="Bloomberg"
              style={{ width: "12vw", height: 33, marginRight: 68 }}
            />
            <img
              src={yahoo}
              alt="yahoo"
              style={{ width: "7vw", height: 27, marginRight: 68 }}
            />
            <img
              src={benzinga}
              alt="Benzinga"
              style={{ width: "12vw", height: 17 }}
            />
          </div>
        </div>
      </section>

      <section className={classes.image}></section>
    </section>
  );
}

export default Intro;
