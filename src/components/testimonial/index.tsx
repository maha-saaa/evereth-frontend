import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 211,
    padding: {
      right: 40,
      left: 40,
    },
  },
  title: {
    fontSize: 48,
    fontWeight: 600,
    color: colors.white,
    marginBottom: 89,
  },
});

function Testimonial() {
  const classes = useStyles();

  return (
    <section id="section-testimonial" className={classes.container}>
      <section className={classes.title}>
        <span>Testimonial</span>
      </section>

      <section></section>
    </section>
  );
}

export default Testimonial;
