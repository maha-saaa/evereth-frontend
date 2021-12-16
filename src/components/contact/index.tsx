import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";
import logo from "../../assets/images/logo.png";
import linkedin from "../../assets/images/linkedin.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import appStore from "../../assets/images/app-store.svg";
import googlePlay from "../../assets/images/google-play.svg";
import { FACEBOOK } from "../../constants/urls";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 116,
    color: colors.white,
    padding: {
      right: 183,
      left: 183,
    },
    "@media screen and (max-width: 600px)": {
      padding: {
        right: 16,
        left: 16,
      },
      flexDirection: "column",
    },
  },
  col: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
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
});

function Contact() {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <section className={classes.col}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" style={{ width: 47, height: 47 }} />
          <span>EverETH</span>
        </div>
        <span>Your best crypto partner.</span>
        <div className={classes.social}>
          <img
            src={linkedin}
            alt="linkedin"
            style={{ width: 20, height: 20, marginRight: 40 }}
          />
          <a
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={facebook}
              alt="facebook"
              style={{ width: 20, height: 20, marginRight: 40 }}
            />
          </a>
          <img
            src={instagram}
            alt="instagram"
            style={{ width: 20, height: 20 }}
          />
        </div>
      </section>

      <section className={classes.col}>
        <span>Quick Links</span>
        <div className={classes.links}>
          <div className={classes.col}>
            <a href="#section-about">About</a>
            <a href="#section-features">Features</a>
          </div>
          <div className={classes.col}>
            <a href="#section-testimonial">Testimonial</a>
            <a href="#section-faq">FaQ</a>
          </div>
        </div>
      </section>

      <section className={classes.col}>
        <span style={{ marginBottom: 24 }}>Coming soon...</span>
        <div className={classes.downloadBtn}>
          <img src={appStore} alt="appStore" />
          <div>
            <span>Download on the</span>
            <span>App Store</span>
          </div>
        </div>
        <div className={classes.downloadBtn}>
          <img src={googlePlay} alt="googlePlay" />
          <div>
            <span>GET IT ON</span>
            <span>Google Play</span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
