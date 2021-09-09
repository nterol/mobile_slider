import { atom } from "jotai";

export const possibleDrawerState = {
  closed: "CLOSED",
  mid: "MID",
  open: "OPEN",
};

export const drawerStateAtom = atom(possibleDrawerState.closed);

export const closedDrawerAtom = atom(0);
export const openDrawerAtom = atom(64);
export const midDrawerAtom = atom(0);
