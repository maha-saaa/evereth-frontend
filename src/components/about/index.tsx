import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";
import world from "../../assets/images/world.svg";
import VisibilitySensor from "react-visibility-sensor";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    // height: "30%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 211,
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
    minWidth: 340,
  },
  title: {
    color: colors.white,
    fontSize: 48,
  },
  desc: {
    color: colors.text,
    fontSize: 18,
    margin: {
      top: 28,
    },
  },
  count: {
    display: "flex",
    flexDirection: "row",
    color: colors.white,
    justifyContent: "space-between",
    marginTop: 93,
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
      justifyItems: "center"
    },
    "& div": {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      marginRight: 72,
      "& span:nth-child(1)": {
        fontsize: 48,
        marginBottom: 11,
      },
      "& span:nth-child(2)": {
        fontsize: 18,
      },
    },
  },
  image: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
  },
});

const data = [
  { key: 1, name: "$3M+", desc: "paid so far in Binance-peg Ethereum" },
  { key: 2, name: "20K+", desc: "Comminuty of EverEth holders" },
  { key: 3, name: "3", desc: "Blockchain summmit sponsership" },
];

function About() {
  const classes = useStyles();
  function onChange(isVisible: boolean) {
    console.log("Element is now %s", isVisible ? "visible" : "hidden");
  }
  return (
    <VisibilitySensor onChange={onChange}>
      <section id="section-about" className={classes.container}>
        <section className={classes.info}>
          <span className={classes.title}>Worldwide devidend</span>
          <span className={classes.title}>payments in</span>
          <span className={classes.title}>Ethereum</span>
          <span className={classes.desc}>
            The safest and easiest way to earn WTH on Binance Smart Chain
            Passively. and easiest way to earn Ethereum in a fully decentralised
            ecosystem.
          </span>

          <div className={classes.count}>
            {data.map((temp) => (
              <div key={temp.key}>
                <span style={{ fontSize: 48 }}>{temp.name}</span>
                <span style={{ fontSize: 18 }}>{temp.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={classes.image}>
          <img src={world} alt="world" style={{ width: "50vw", height: 439 }} />
        </section>
      </section>
    </VisibilitySensor>
  );
}

export default About;
