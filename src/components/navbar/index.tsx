import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";
import logo from "../../assets/images/logo.png";
import Scrollspy from "react-scrollspy";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    color: colors.white,
    alignItems: "center",
    justifyContent: "space-between",
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
    // position: "sticky",
    // top: 0,
  },
  logo: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  menu: {
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    "& ul": {
      display: "flex",
      flexDirection: "row",
      listStyle: "none",
      "& li": {
        margin: 24,
        listStyleType: "none",
        display: "list-item",
        "& a": {
          textDecoration: "none",
          color: colors.text,
        },
      },
    },
  },
  button: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    cursor: "pointer",
    "& div": {
      backgroundColor: colors.purple,
      padding: {
        top: 12,
        right: 24,
        bottom: 12,
        left: 24,
      },
      borderRadius: 100,
    },
  },
});

const navbarMenu = [
  {
    key: "#section-about",
    title: "About",
  },
  {
    key: "#section-features",
    title: "Features",
  },
  {
    key: "#section-roadmap",
    title: "Roadmap",
  },
  {
    key: "#section-faq",
    title: "FaQ",
  },
  {
    key: "#section-testimonial",
    title: "Testimonial",
  },
];

function Navbar() {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <section className={classes.logo}>
        <img src={logo} alt="logo" style={{ width: 47, height: 47 }} />
        <span>EverETH</span>
      </section>

      <section className={classes.menu}>
        <Scrollspy
          items={[
            "section-about",
            "section-features",
            "section-roadmap",
            "section-faq",
            "section-testimonial",
          ]}
          currentClassName="is-current"
        >
          {navbarMenu?.map((temp) => (
            <li key={temp.key}>
              <a href={temp.key}>{temp.title}</a>
            </li>
          ))}
        </Scrollspy>
      </section>

      <section className={classes.button}>
        <div>
          <span>EverETH.app</span>
        </div>
      </section>
    </section>
  );
}

export default Navbar;
