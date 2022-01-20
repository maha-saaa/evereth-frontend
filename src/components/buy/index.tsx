import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import colors from "../../assets/colors";
import { EVERETHSWAP, LATOKEN, PANCAKESWAP } from "../../constants/urls";

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
      marginTop: 90,
      padding: {
        right: 16,
        left: 16,
      },
    },
  },
  buy: {
    flex: 1,
  },
  steps: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
    color: colors.white,
    marginLeft: 50,
    "@media screen and (max-width: 1000px)": {
      marginLeft: 0,
      width: "100%",
      textAlign: "center",
      marginTop: 20,
    },
  },
  howTo: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginBottom: 20,
  },
  btns: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    marginTop: 12,
    "@media screen and (max-width: 1000px)": {
      alignSelf: "center",
    },
  },
  button: {
    backgroundColor: colors.white,
    color: colors.gray,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    padding: 8,
    marginRight: 10,
    fontWeight: 700,
    "&:hover": {
      backgroundColor: colors.lighterGray,
    },
    "@media screen and (max-width: 600px)": {
      fontSize: 12,
      marginRight: 4,
      padding: 4,
    },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    whiteSpace: "pre-line",
  },
  desc: { marginBottom: 18, whiteSpace: "pre-line" },
});

function Buy() {
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
      <section id="section-buy" className={classes.container}>
        <animated.section style={animation} className={classes.buy}>
          <iframe
            title="EverEth"
            width="100%"
            height={700}
            src="https://www.flooz.trade/embedded/0x16dcc0ec78e91e868dca64be86aec62bf7c61037/?backgroundColor=transparent"
            style={{ border: "none" }}
          />
        </animated.section>

        <animated.section style={animation} className={classes.steps}>
          <div className={classes.howTo}>
            <span className={classes.title}>{`HOW TO BUY $EverETH`}</span>
            <span>{`The easiest way to buy $EverETH token is via Flooz. Trade on our website. Alternatively,\n you can buy on EverETH Swap, PancakeSwap or LAToken exchange via the buttons below:`}</span>
            <div className={classes.btns}>
              <a
                className={classes.button}
                href={EVERETHSWAP}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>EverETH Swap</span>
              </a>
              <a
                className={classes.button}
                href={PANCAKESWAP}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>PancakeSwap</span>
              </a>
              <a
                className={classes.button}
                href={LATOKEN}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>LATOKEN</span>
              </a>
            </div>
          </div>
          <span
            className={classes.desc}
          >{`I'm still confused!😳\n No problem! Follow these steps:`}</span>
          <span
            className={classes.desc}
          >{`Step 1: Download MetaMask or TrustWallet
              These apps are safe, secure and widely used in the DeFi Market (Metamask is suggested). 
              This becomes your secure wallet where your $EverETH (and other cryptocurrencies) are stored. 
              Remember to never share your seed phrase!`}</span>
          <span className={classes.desc}>{`Step 2: Fund Your Wallet
              Purchase BNB or BSC (Binance Smart Chain) to fund your wallet. 
              Popular USD-pegged stable coins such as USDT, USDC, and BUSD also work. 
              These coins are all used in the Binance Smart Chain (BNB is suggested)`}</span>
          <span className={classes.desc}>{`Step 3: Open Your Browser
              Revisit this section of our website to use the recommended "Buy Now with Flooz.Trade" option,
              or visit swap.evereth.app or pancakeswap.finance. 
              Pancakeswap is an exchange that allows users to swap BNB with other DeFi tokens; 
              it's the largest & most popular decentralized platform in the space.`}</span>
          <span className={classes.desc}>{`Step 4: Swap for EverETH
              Using Flooz, "Connect" to your Metamask, or TrustWallet, enter the amount you want to spend 
              and click Swap — Done!.`}</span>
          <span
            className={classes.desc}
          >{`If you prefer the PancakeSwap option, click "select a currency", and enter the $EverETH contract address:`}</span>
          <span
            className={classes.desc}
          >{`0x16dCc0eC78E91e868DCa64bE86aeC62bf7C61037
            (We recommend you use slippage 12 to 15% or 0.1% with ".000" trick).`}</span>
        </animated.section>
      </section>
    </VisibilitySensor>
  );
}

export default Buy;
