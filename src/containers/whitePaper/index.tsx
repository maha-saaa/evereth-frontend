import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import Footer from "../../components/footer";
import Rights from "../../components/rights";
import colors from "../../assets/colors";
import backgroundPattern from "../../assets/images/BG.png";
import logo from "../../assets/images/logo.png";
import arrowRightBlack from "../../assets/images/arrow-right-black.svg";
import arrowRightWhite from "../../assets/images/arrow-right-white.svg";
import arrowLeftBlack from "../../assets/images/arrow-left-black.svg";
import arrowLeftWhite from "../../assets/images/arrow-left-white.svg";
import { EVERETHAPP } from "../../constants/urls";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = createUseStyles({
  container: {
    display: "flex",
    // flex: 1,
    flexDirection: "column",
    backgroundColor: colors.background,
    backgroundSize: "cover",
    minHeight: window.innerHeight,
    padding: {
      top: 16,
    },
    boxSizing: "border-box",
    "@media screen and (min-width: 1000px)": {
      position: "absolute",
      left: 0,
      right: 0,
    },
  },
  navbar: {
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
          "&:hover": {
            color: colors.white,
          },
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
  doc: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  buttons: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    marginTop: 33,
  },
  prev: {
    width: 57,
    height: 57,
    borderRadius: 50,
    border: "1px solid white",
    marginRight: 16,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  next: {
    width: 57,
    height: 57,
    borderRadius: 50,
    border: "1px solid white",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const navbarMenu = [
  {
    key: "./#section-about",
    title: "About",
  },
  {
    key: "./#section-features",
    title: "Features",
  },
  {
    key: "./#section-roadmap",
    title: "Roadmap",
  },
  {
    key: "./#section-faq",
    title: "FAQ",
  },
  {
    key: "./whitepaper",
    title: "Whitepaper",
  },
];

function WhitePaper() {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pagingStatus, setPagingStatus] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const onPagination = (btn: number) => {
    setPagingStatus(btn);
    if (btn === 0) {
      if (pageNumber > 1) {
        setPageNumber((v) => v - 1);
      }
    } else if (btn === 1) {
      if (pageNumber <= numPages) {
        setPageNumber((v) => v + 1);
      }
    }
  };

  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      <section className={classes.navbar}>
        <section className={classes.logo}>
          <a href={"./"}>
            <img src={logo} alt="logo" style={{ width: 47, height: 47 }} />
            <span>EverETH.</span>
          </a>
        </section>

        <section className={classes.menu}>
          <ul>
            {navbarMenu?.map((temp) => (
              <li key={temp.key}>
                <a
                  href={temp.key}
                  // download={temp.title === "WhitePaper" ? true : false}
                >
                  {temp.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className={classes.button}>
          <a href={EVERETHAPP} target="_blank" rel="noreferrer noopener">
            <span>EverETH.app</span>
          </a>
        </section>
      </section>

      <section className={classes.doc}>
        <Document
          file={process.env.PUBLIC_URL + "/everETHWhitepaper.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div className={classes.buttons}>
          <div
            className={classes.prev}
            style={{
              backgroundColor:
                pagingStatus === 0 ? colors.white : colors.background,
            }}
            onClick={() => onPagination(0)}
          >
            <img
              src={pagingStatus === 0 ? arrowLeftBlack : arrowLeftWhite}
              alt="<"
            />
          </div>
          <div
            className={classes.next}
            style={{
              backgroundColor:
                pagingStatus === 1 ? colors.white : colors.background,
            }}
            onClick={() => onPagination(1)}
          >
            <img
              src={pagingStatus === 1 ? arrowRightBlack : arrowRightWhite}
              alt=">"
            />
          </div>
        </div>
      </section>

      <Rights />
    </div>
  );
}

export default WhitePaper;
