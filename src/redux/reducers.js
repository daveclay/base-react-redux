import { map, reducer } from "./utils/redux-map";
import {
} from "./mutators"
import {
} from "../selectors/selectors"

export const initialState = {
}

const init = (state, action) => {
  console.log("init!")
  return state
}

map('init', init)

export const rootReducer = reducer
