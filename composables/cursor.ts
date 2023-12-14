import { appState } from "../appstate/appstate";

export const handleCursor = () => {
  appState.cursorWidth = 90;
  appState.cursorHeight = 90;
  appState.hoveringLink = true;
};

export const resetCursor = () => {
  appState.cursorWidth = 10;
  appState.cursorHeight = 10;
  appState.hoveringLink = false;
};
