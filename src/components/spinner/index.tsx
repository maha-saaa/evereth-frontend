import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../assets/colors";

const useStyles = createUseStyles({
  lds_ellipsis: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 72,
    position: "relative",
    height: "100%",
    "& div": {
      borderRadius: "50%",
      position: "absolute",
      background: colors.purple,
      animationTimingFunction: "cubic-bezier(0, 1, 1, 0)",
    },
    "& div:nth-child(1)": {
      left: 8,
      animation: "$lds-ellipsis1 0.6s infinite",
    },
    "& div:nth-child(2)": {
      left: 8,
      animation: "$lds-ellipsis2 0.6s infinite",
    },
    "& div:nth-child(3)": {
      left: 32,
      animation: "$lds-ellipsis2 0.6s infinite",
    },
    "& div:nth-child(4)": {
      left: 56,
      animation: "$lds-ellipsis3 0.6s infinite",
    },
  },
  "@keyframes lds-ellipsis1": {
    "0%": {
      transform: "scale(0)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
  "@keyframes lds-ellipsis3": {
    "0%": {
      transform: "scale(1)",
    },
    "100%": {
      transform: "scale(0)",
    },
  },
  "@keyframes lds-ellipsis2": {
    "0%": {
      transform: "translate(0, 0)",
    },
    "100%": {
      transform: "translate(24px, 0)",
    },
  },
});

function Spinner({ size = "13px", color = colors.purple }) {
  const classes = useStyles();
  return (
    <div className={classes.lds_ellipsis}>
      <div style={{ width: size, height: size, background: color }} />
      <div style={{ width: size, height: size, background: color }} />
      <div style={{ width: size, height: size, background: color }} />
      <div style={{ width: size, height: size, background: color }} />
    </div>
  );
}

export default React.memo(Spinner);
