import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";

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
    fontSize: 48,
    whiteSpace: "pre-line",
  },
  desc: {
    color: colors.text,
    fontSize: 16,
    margin: {
      top: 28,
    },
  },
  action: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.purple,
    borderRadius: 100,
    width: "20vw",
    height: 65,
    margin: {
      top: 45,
    },
    color: colors.white,
  },
  image: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
});

function Swap() {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <section className={classes.info}>
        <span className={classes.title}>
          {`Manage your dividends\n in one Place`}
        </span>
        <span className={classes.desc}>EverEth Swap is Coming soon</span>

        <div className={classes.action}>
          <span>Let's get Started</span>
        </div>
      </section>

      <section className={classes.image}></section>
    </section>
  );
}

export default Swap;
