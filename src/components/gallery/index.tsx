import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import colors from "../../assets/colors";
import gal1 from "../../assets/images/gal1.png";
import gal2 from "../../assets/images/gal2.png";
import gal3 from "../../assets/images/gal3.mp4";
import gal4 from "../../assets/images/gal4.mp4";
import gal5 from "../../assets/images/gal5.mp4";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 211,
    padding: {
      right: 183,
      left: 183,
    },
    "@media screen and (max-width: 1000px)": {
      flexDirection: "column",
      justifyContent: "center",
      marginTop: 92,
      padding: {
        right: 16,
        left: 16,
      },
    },
  },
  title: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    color: colors.white,
    whiteSpace: "pre-line",
    marginRight: 40,
    "@media screen and (max-width: 1000px)": {
      marginBottom: 42,
      marginRight: 0,
      textAlign: "center",
    },
    "& span:nth-child(1)": {
      fontSize: 48,
      marginBottom: 13,
      "@media screen and (max-width: 1000px)": {
        fontSize: 29,
      },
    },
  },
  gallery: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  gallerySection: {
    display: "flex",
    flexDirection: "column",
  },
  galleryRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  size: {
    width: 140,
    height: 250,
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
  },
});

function MediaGallery() {
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(false);

  const onChange = (isVisible: boolean) => {
    if (isVisible) {
      setVisibility(isVisible);
    }
  };

  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(80px)",
  });

  return (
    <VisibilitySensor onChange={onChange} resizeThrottle={1} partialVisibility>
      <section id="section-gallery" className={classes.container}>
        <animated.section className={classes.title} style={animation}>
          <span>{`EverETH\n Global Initiative`}</span>
          <span>
            {`Evereth is your global community.\n From being represented at the world's largest crypto summits,
             to marketing your token on a global scale. We drive initiatives
              to empower the community to be the change you wish to see\n in the world.`}
          </span>
        </animated.section>

        <animated.section style={animation} className={classes.gallery}>
          <div className={classes.gallerySection}>
            <div className={classes.galleryRow}>
              <img
                src={gal1}
                alt="1"
                className={classes.size}
                style={{ marginRight: 10 }}
              />
              <video
                autoPlay
                loop
                muted
                height={250}
                style={{ marginRight: 10 }}
              >
                <source src={gal4} type="video/mp4" />
              </video>
              <video
                autoPlay
                loop
                muted
                height={250}
                style={{ marginRight: 10 }}
              >
                <source src={gal5} type="video/mp4" />
              </video>
            </div>
            <div className={classes.galleryRow}>
              <img
                src={gal2}
                alt="2"
                className={classes.size}
                style={{ marginRight: 10 }}
              />
              <video
                autoPlay
                loop
                muted
                height={250}
                style={{ marginRight: 10 }}
              >
                <source src={gal3} type="video/mp4" />
              </video>
            </div>
          </div>
        </animated.section>
      </section>
    </VisibilitySensor>
  );
}

export default MediaGallery;
