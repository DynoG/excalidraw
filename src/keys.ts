export const isDarwin = /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

export const KEYS = {
  A_CODE: "KeyA",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  C_CODE: "KeyC",
  CTRL_OR_CMD: isDarwin ? "metaKey" : "ctrlKey",
  DELETE: "Delete",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F_CODE: "KeyF",
  G_CODE: "KeyG",
  H_CODE: "KeyH",
  QUESTION_MARK_KEY: "?",
  QUOTE_CODE: "Quote",
  SPACE_CODE: "Space",
  TAB: "Tab",
  V_CODE: "KeyV",
  Z_CODE: "KeyZ",
} as const;

export type Key = keyof typeof KEYS;

export const isArrowCode = (code: string) =>
  code === KEYS.ARROW_LEFT ||
  code === KEYS.ARROW_RIGHT ||
  code === KEYS.ARROW_DOWN ||
  code === KEYS.ARROW_UP;

export const getResizeCenterPointKey = (event: MouseEvent | KeyboardEvent) =>
  event.altKey;

export const getResizeWithSidesSameLengthKey = (event: MouseEvent) =>
  event.shiftKey;

export const getRotateWithDiscreteAngleKey = (event: MouseEvent) =>
  event.shiftKey;
