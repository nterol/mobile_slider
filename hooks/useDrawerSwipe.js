import { useDrag } from "@use-gesture/react";

import {
  closedDrawerAtom,
  drawerStateAtom,
  midDrawerAtom,
  openDrawerAtom,
  possibleDrawerState,
} from "../states/drawer";

export default function useDrawerSwipe(api) {
  const [currentDrawerState, setDrawerState] = useAtom(drawerStateAtom);
  const [closedPosition, setClosedPosition] = useAtom(closedDrawerAtom);
  const [midPosition, setMidPosition] = useAtom(midDrawerAtom);
  const [openPosition] = useAtom(openDrawerAtom);
  const binder = useDrag(
    ({
      axis,
      active,
      direction: [, directionY],
      movement: [, my],
      velocity: [, vy],
      cancel,
      event,
      ...rest
    }) => {
    //   if (axis === "x") return;
    //   console.log(event.type);
    //   console.log(rest);

    //   let newPosition;
    //   if (currentDrawerState === possibleDrawerState.closed)
    //     newPosition = closedPosition + my;
    //   else if (currentDrawerState === possibleDrawerState.mid)
    //     newPosition = midPosition + my;
    //   else newPosition = openPosition + my;

    //   if (newPosition > closedPosition || newPosition <= 0) cancel();

    //   let nextPosition;

    //   if (newPosition >= midPosition || vy > 2) {
    //     nextPosition = openPosition;
    //     setDrawerState(possibleDrawerState.open);
    //   } else if (newPosition > -50) {
    //     nextPosition = midPosition;
    //     setDrawerState(possibleDrawerState.mid);
    //   }

    //   if (newPosition > midPosition) {
    //     nextPosition = closedPosition;
    //     setDrawerState(possibleDrawerState.closed);
    //   } else if ((newPosition <= midPosition) & (newPosition > openPosition)) {
    //     nextPosition = midPosition;
    //     setDrawerState(possibleDrawerState.mid);
    //   } else if (newPosition) {
    //     nextPosition = openPosition;
    //     setDrawerState(possibleDrawerState.open);
    //   }

    //   api.start({
    //     y: active && event.type !== "pointerup" ? newPosition : nextPosition,
    //     immediate: active,
    //   });
    }
  );
  return binder;
}
