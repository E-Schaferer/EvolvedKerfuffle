import type { reduxStore } from "./store";

export type rootState = ReturnType<typeof reduxStore.getState>;

export type appDispatch = typeof reduxStore.dispatch;

export type appStore = typeof reduxStore