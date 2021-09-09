import { useEffect } from "react";
import { closedDrawerAtom, midDrawerAtom } from "../states/drawer";

export default function useDrawerPosition(callback) {
  const [, setMidPosition] = useAtom(midDrawerAtom);
  const [, setClosedPosition] = useAtom(closedDrawerAtom);

  useEffect(() => {
    const heightWithDelta = window.innerHeight - mobileDelta;
    setMidPosition(heightWithDelta - 264);
    const closed = heightWithDelta - 80;
    setClosedPosition(closed);

    callback(closed);
  }, []);
}
