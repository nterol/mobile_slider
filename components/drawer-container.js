import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useAtom } from "jotai";

import styled from "styled-components";

import { mobileDeltaAtom } from "../states/mobildeDelta";
import useDrawerSwipe from "../hooks/useDrawerSwipe";
import useDrawerPosition from "../hooks/useDrawerPosition";

const DrawerSection = styled(animated.section)`
  /* lol */
  --open-position: 64px;

  /*  header (80) + attachmentOption (120) + static buy button (80) */
  --mid-position: calc(
    100vh - var(--drawer-mid-size) - var(--mobile-delta, 0px)
  );

  /* header (80px) */
  --closed-position: calc(100vh - 80px - var(--mobile-delta, 0px));

  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: rgb(0 0 0 / 20%) -2px -3px 10px 4px;
  max-width: 100vw;
  background: #ffffff;
  touch-action: none;
`;

const DrawerDraggable = styled.div`
  height: 100%;
  overflow: var(--attachment-overflow);
  -webkit-overflow-scrolling: touch;

  &:before {
    content: "";
    position: absolute;
    top: 4px;
    left: calc(50% - 24px);
    display: block;
    height: 4px;
    margin: 0 auto;
    width: 50px;
    border-radius: 100px;
    background: black;
  }
`;

const DrawerContainer = ({ children }) => {
  const [{ y }, api] = useSpring(() => ({ y: 1000 }));

  useDrawerPosition((d) => api.start({ y: d }));

  const binder = useDrawerSwipe({ api });
  return (
    <DrawerSection {...binder()} style={{ y }}>
      <DrawerDraggable>{children}</DrawerDraggable>
    </DrawerSection>
  );
};

export default DrawerContainer;
