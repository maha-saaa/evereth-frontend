import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import colors from "../../assets/colors";
import plus from "../../assets/images/plus.svg";
import minus from "../../assets/images/minus.svg";
import Expand from "../expand";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 211,
    padding: {
      right: 183,
      left: 183,
    },
    "@media screen and (max-width: 1000px)": {
      marginTop: 90,
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
    alignItems: "center",
    color: colors.white,
    marginBottom: 72,
    width: "70vw",
    "@media screen and (max-width: 1000px)": {
      marginBottom: 42,
    },
    "& span:nth-child(1)": {
      "@media screen and (max-width: 1000px)": {
        fontSize: 29,
      },
      fontSize: 48,
      marginBottom: 13,
    },
    "& span:nth-child(2)": {
      fontSize: 16,
      fontWeight: 400,
      color: colors.text,
      textAlign: "center",
    },
  },
  questions: {
    display: "flex",
    // flex: 1,
    flexDirection: "column",
    boxSizing: "border-box",
    backgroundColor: colors.grayWithOpacity,
    width: "70vw",
    // height: 392,
    borderRadius: 20,
    padding: {
      left: 47,
      top: 32,
      right: 47,
      bottom: 32,
    },
    "@media screen and (max-width: 1000px)": {
      padding: {
        left: 12,
        top: 24,
        right: 12,
        bottom: 24,
      },
    },
  },
  qRow: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    "& div:nth-child(1)": {
      display: "flex",
      justifyContent: "flex-start",
      alignSelf: "flex-start",
    },
    "& div:nth-child(2)": {
      display: "flex",
      flexDirection: "column",
    },
    cursor: "pointer",
  },
  question: {
    fontSize: 20,
    color: colors.white,
    marginLeft: 40,
    "@media screen and (max-width: 1000px)": {
      fontSize: 18,
    },
  },
  answer: {
    fontSize: 16,
    color: colors.lighterGray,
    marginLeft: 40,
    marginTop: 32,
    marginBottom: 32,
    whiteSpace: "pre-line",
  },
});

const data = [
  {
    key: 1,
    question: "Is EverETH on Binance Smart Chain or Ethereum network?",
    answer: "The smaller fees always win. EverETH is on Binance Smart Chain.",
    isOpen: false,
  },
  {
    key: 2,
    question: "When I will recieve my Ethereum dividends?",
    answer:
      `Our unique reward system is triggered by volume (buy + sell activity to cover gas fees). ayouts to holders may not occur every 30 minutes if the trading volume is low. When this is the case, the amount of rewarded Ethereum each holder will receive does not decrease. ` +
      `However, will accrue over a longer period of time until it is suitable for a payout to trigger, (usually between 1-2 hours).`,
    isOpen: false,
  },
  {
    key: 3,
    question: "Where to check how much I earned?",
    answer:
      `Our developers created the EverETH dashboard where you can check your earnings live.\n` +
      `Go to : https://EverETH.app\n` +
      `Connect your wallet, or paste your wallet address.\n` +
      `However there is another way to check your Ethereum balance: You simply need to add the custom token\n Binance-Peg Ethereum BEP20 to your wallet.`,
    isOpen: false,
  },
  {
    key: 4,
    question: "How do I get in touch with the team?",
    answer: `The best way to contact the team is through our Telegram. We are always available to help you!`,
    isOpen: false,
  },
];

function Faq() {
  const classes = useStyles();
  const [questions, setQuestions] = useState(data);
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

  const onClickQuestion = (key: number) => {
    const arr = questions.map((temp) => {
      if (temp.key === key) {
        return {
          ...temp,
          isOpen: !temp.isOpen,
        };
      } else {
        return {
          ...temp,
        };
      }
    });
    setQuestions(arr);
  };

  return (
    <VisibilitySensor onChange={onChange} resizeThrottle={1} partialVisibility>
      <section id="section-faq" className={classes.container}>
        <animated.section className={classes.title} style={animation}>
          <span>FAQ</span>
          <span>
            The Content shared on this website is for information purpose only
            and, thus, should not be considered as financial advice.
            Trading/Investing is risky and you should never invest more than you
            can afford to lose. Cryptocurrencies are risky. Never invest more
            than you can afford to lose. You alone assume the sole
            responsibility of evaluating the merits and risks associated with
            the use of any information or other Content on the Site before
            making any decisions based on such information or other Content.
          </span>
        </animated.section>

        <animated.section className={classes.questions} style={animation}>
          {questions?.map((temp) => (
            <div
              key={temp.key}
              className={classes.qRow}
              onClick={() => onClickQuestion(temp.key)}
            >
              <div style={{ marginTop: temp.isOpen ? 12 : 0 }}>
                <img
                  src={temp.isOpen ? minus : plus}
                  alt={temp.isOpen ? "-" : "+"}
                />
              </div>
              <div>
                <span className={classes.question}>{temp.question}</span>
                <Expand expanded={temp.isOpen} config={{}}>
                  <span className={classes.answer}>{temp.answer}</span>
                </Expand>
              </div>
            </div>
          ))}
        </animated.section>
      </section>
    </VisibilitySensor>
  );
}

export default Faq;
