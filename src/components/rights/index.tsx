import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    padding: {
      right: 183,
      left: 183,
    },
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
  },
  title: {
    fontSize: 48,
    fontWeight: 600,
    color: colors.white,
    marginBottom: 89,
  },
  rights: {
    color: colors.lightGray,
    fontSize: 16,
    marginBottom: 20,
  },
});

function Rights() {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <span
        className={classes.rights}
      >{`EverETH ©. All rights reserved.`}</span>
      <div>
        <a href="./" className={classes.rights} style={{ marginRight: 10 }}>
          {`Term of Service`}
        </a>
        <a
          href="./"
          className={classes.rights}
          style={{
            borderLeft: "1px solid rgba(52, 56, 76, 1)",
            paddingLeft: 10,
          }}
        >
          Privacy Policy
        </a>
      </div>
    </section>
  );
}

export default Rights;
