import {createStore} from "redux";
import counterReducer from "./counter-reducer";

export const store = createStore(counterReducer)

export type AppRootStateType = ReturnType<typeof counterReducer>
// @ts-ignore
window.store = store
