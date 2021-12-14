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
    alignSelf: "center",
  },
  carousel: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  card: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
    boxSizing: "border-box",
    backgroundColor: colors.grayWithOpacity,
    width: "44vw",
    // height: 317,
    borderRadius: 20,
    marginRight: 107,
    padding: 32,
  },
  userInfo: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 34,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 50,
    backgroundColor: colors.white,
    marginRight: 21,
  },
  info: {
    display: "flex",
    // flex: 1,
    flexDirection: "column",
    "& span:nth-child(1)": {
      fontWeight: 600,
      fontSize: 20,
      color: colors.white,
    },
    "& span:nth-child(2)": {
      fontWeight: 600,
      fontSize: 14,
      color: colors.lighterGray,
    },
  },
  desc: {
    fontWeight: 400,
    fontSize: 16,
    color: colors.text,
  },
  paging: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  userCount: {
    fontWeight: 500,
    fontSize: 24,
    color: colors.white,
    marginBottom: 19,
  },
  buttons: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    // marginTop: 33,
  },
  prev: {
    width: 57,
    height: 57,
    borderRadius: 50,
    border: "1px solid white",
    marginRight: 16,
  },
  next: {
    width: 57,
    height: 57,
    borderRadius: 50,
    border: "1px solid white",
  },
});

const data = [
  {
    id: 0,
    userName: "Jake Addams",
    job: "Ethereum Earner",
    profileImage: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque viverra turpis dictum donec fringilla sit turpis egestas. Massa vestibulum eu ac vel hendrerit posuere. Volutpat eu tempor blandit aenean velit ac odio. Elementum tortor quis viverra sed sit malesuada nisi, at. Sit in diam ipsum ut in. Et mi laoreet sed sit ultrices elementum arcu quis. Sit venenatis sit senectus dictum pharetra lacinia duis. Vitae velit ut vestibulum iaculis scelerisque etiam. Etiam lobortis amet et fames montes, tincidunt sit eu.",
  },
  {
    id: 1,
    userName: "Amy Roberts",
    job: "Earner",
    profileImage: "",
    desc: "Scelerisque viverra turpis dictum donec fringilla sit turpis egestas. Massa vestibulum eu ac vel hendrerit posuere. Volutpat eu tempor blandit aenean velit ac odio. Elementum tortor quis viverra sed sit malesuada nisi, at. Sit in diam ipsum ut in. Et mi laoreet sed sit ultrices elementum arcu quis. Sit venenatis sit senectus dictum pharetra lacinia duis. Vitae velit ut vestibulum iaculis scelerisque etiam. Etiam lobortis amet et fames montes, tincidunt sit eu.",
  },
];

function Testimonial() {
  const classes = useStyles();
  const [user, setUser] = useState(data[0]);
  const [userIndex, setuserIndex] = useState(0);
  const [pagingStatus, setPagingStatus] = useState(1);

  const onPagination = (btn: number) => {
    setPagingStatus(btn);
    if (btn === 0) {
      if (userIndex - 1 >= 0) {
        setuserIndex(userIndex - 1);
        setUser(data[userIndex - 1]);
      }
    } else if (btn === 1) {
      if (userIndex + 1 !== data.length) {
        setuserIndex(userIndex + 1);
        setUser(data[userIndex + 1]);
      }
    }
  };

  return (
    <section id="section-testimonial" className={classes.container}>
      <section className={classes.title}>
        <span>Testimonial</span>
      </section>

      <section className={classes.carousel}>
        <div className={classes.card}>
          <div className={classes.userInfo}>
            <div className={classes.avatar} />
            <div className={classes.info}>
              <span>{user.userName}</span>
              <span>{user.job}</span>
            </div>
          </div>
          <span className={classes.desc}>{user.desc}</span>
        </div>
        <div className={classes.paging}>
          <div className={classes.userCount}>{`${userIndex + 1}/${
            data.length
          } People`}</div>
          {/* <div>----</div> */}
          <div className={classes.buttons}>
            <div
              className={classes.prev}
              style={{
                backgroundColor:
                  pagingStatus === 0 ? colors.white : colors.background,
              }}
              onClick={() => onPagination(0)}
            />
            <div
              className={classes.next}
              style={{
                backgroundColor:
                  pagingStatus === 1 ? colors.white : colors.background,
              }}
              onClick={() => onPagination(1)}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Testimonial;
