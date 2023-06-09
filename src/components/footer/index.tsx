import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";
import logo from "../../assets/images/logo.png";
import telegram from "../../assets/images/telegram.svg";
import facebook from "../../assets/images/facebook.svg";
import discord from "../../assets/images/discord.svg";
import twitter from "../../assets/images/twitter.svg";
import appStore from "../../assets/images/app-store.svg";
import googlePlay from "../../assets/images/google-play.svg";
import {
  DISCORD,
  FACEBOOK,
  TELEGRAM,
  TWITTER,
  EVERETHWALLET,
} from "../../constants/urls";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 116,
    color: colors.white,
    padding: {
      right: 183,
      left: 183,
    },
    "@media screen and (max-width: 1000px)": {
      marginTop: 26,
      padding: {
        right: 16,
        left: 16,
      },
      flexDirection: "column",
      alignItems: "center",
    },
  },
  col: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  mainCol: {
    margin: {
      left: 24,
      right: 24,
    },
  },
  logo: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    "& span": {
      fontWeight: 700,
      fontSize: 34,
    },
    marginBottom: 8,
  },
  social: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 40,
  },
  links: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    marginTop: 24,
    "& a": {
      textDecoration: "none",
      color: colors.lighterGray,
      marginBottom: 24,
    },
  },
  downloadBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid white",
    borderRadius: 100,
    width: "20vw",
    height: 65,
    marginBottom: 24,
    cursor: "pointer",
    textDecoration: "none",
    color: colors.white,
    "& div": {
      display: "flex",
      flexDirection: "column",
      marginLeft: 10,
      "& span:nth-child(1)": {
        fontSize: 12,
        fontWeight: 500,
      },
      "& span:nth-child(2)": {
        fontSize: 16,
        fontWeight: 500,
      },
    },
  },
  mobileCol: {
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <section className={[classes.col, classes.mainCol].join(" ")}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" style={{ width: 47, height: 47 }} />
          <span>EverETH</span>
        </div>
        <span>Your best crypto partner.</span>
        <div className={classes.social}>
          <a href={FACEBOOK} target="_blank" rel="noreferrer noopener">
            <img
              src={facebook}
              alt="facebook"
              style={{ width: 20, height: 20, marginRight: 40 }}
            />
          </a>
          <a href={TELEGRAM} target="_blank" rel="noreferrer noopener">
            <img
              src={telegram}
              alt="telegram"
              style={{ width: 20, height: 20, marginRight: 40 }}
            />
          </a>
          <a href={DISCORD} target="_blank" rel="noreferrer noopener">
            <img
              src={discord}
              alt="discord"
              style={{ width: 20, height: 20, marginRight: 40 }}
            />
          </a>
          <a href={TWITTER} target="_blank" rel="noreferrer noopener">
            <img
              src={twitter}
              alt="twitter"
              style={{ width: 20, height: 20 }}
            />
          </a>
        </div>
      </section>

      <section
        className={[classes.col, classes.mobileCol, classes.mainCol].join(" ")}
      >
        <span>Quick Links</span>
        <div className={classes.links}>
          <div className={classes.col}>
            <a href="#section-about">About</a>
            <a href="#section-features">Features</a>
          </div>
          <div className={classes.col}>
            <a href="#section-testimonial">Testimonial</a>
            <a href="#section-faq">FAQ</a>
          </div>
        </div>
      </section>

      <section
        className={[classes.col, classes.mobileCol, classes.mainCol].join(" ")}
      >
        <a
          href={EVERETHWALLET}
          target="_blank"
          rel="noreferrer noopener"
          className={classes.downloadBtn}
        >
          <img src={googlePlay} alt="googlePlay" />
          <div>
            <span>Get it on</span>
            <span>Google Play</span>
          </div>
        </a>
      </section>
    </section>
  );
}

export default Footer;
