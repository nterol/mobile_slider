import { useRef } from "react";
import App from "next/app";
import { animated, useTransition } from "react-spring";

import "../styles/globals.css";
import s from "../styles/App.module.css";
import useMobileDelta from "../hooks/useMobileDelta";

function Slider({ children }) {
  const heightRef = useRef(null);
  const transition = useTransition(children, {
    from: { x: -100 },
    enter: { x: 0 },
    leave: { x: 100 },
  });

  useMobileDelta(heightRef);

  return (
    <main className={s.mainContainer} ref={heightRef}>
      {transition((style, item) => (
        <animated.div style={style} className={s.slider}>
          {item}
        </animated.div>
      ))}
    </main>
  );
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const items = [
      {
        id: this.props.router.route,
        Component,
        pageProps,
      },
    ];

    return (
      <main className={s.mainContainer}>
        {/* // <Container>
      // <Slider> */}
        <Component {...pageProps} />
        {/* // </Slider>
      // </Container> */}
      </main>
    );
  }
}

export default MyApp;
