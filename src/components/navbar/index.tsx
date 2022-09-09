import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-scroll";
import colors from "../../assets/colors";
import logo from "../../assets/images/logo.png";
import { EVERETHWALLET } from "../../constants/urls";

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
    zIndex: 1000,
    "@media screen and (max-width: 1000px)": {
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
    "& a": {
      textDecoration: "none",
      color: colors.white,
      display: "flex",
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      "& span": {
        fontSize: 18,
        fontWeight: 700,
      },
    },
  },
  menu: {
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    listStyle: "none",
    padding: 16,
    "& li": {
      margin: 24,
      listStyleType: "none",
      display: "list-item",
      "& a": {
        textDecoration: "none",
        color: colors.text,
        cursor: "pointer",
        "&:hover": {
          color: colors.white,
        },
      },
    },
  },
  button: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    "& a": {
      backgroundColor: colors.purple,
      "&:hover": {
        backgroundColor: colors.darkPurple,
        fontWeight: 700,
      },
      padding: {
        top: 12,
        right: 24,
        bottom: 12,
        left: 24,
      },
      borderRadius: 100,
      textDecoration: "none",
      color: colors.white,
    },
  },
});

const navbarMenu = [
  {
    key: "About",
    title: "About",
  },
  {
    key: "Features",
    title: "Features",
  },
  {
    key: "Roadmap",
    title: "Roadmap",
  },
  {
    key: "FAQ",
    title: "FAQ",
  },
  {
    key: "./whitepaper",
    title: "Whitepaper",
  },
];

function Navbar() {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <section className={classes.logo}>
        <a href={"./"}>
          <img src={logo} alt="logo" style={{ width: 47, height: 47 }} />
          <span>EverETH.</span>
        </a>
      </section>

      <section className={classes.menu}>
        {navbarMenu?.map((temp) => (
          <li key={temp.key}>
            {temp.title === "Whitepaper" ? (
              <a href={temp.key}>{temp.title}</a>
            ) : (
              <Link
                activeClass="active"
                to={temp.key}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {temp.title}
              </Link>
            )}
          </li>
        ))}
      </section>

      <section className={classes.button}>
        <a href={EVERETHWALLET} target="_blank" rel="noreferrer noopener">
          <span>EverETH Wallet</span>
        </a>
      </section>
    </section>
  );
}

export default Navbar;
