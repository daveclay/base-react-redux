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

const onClick = (state, action) => {
  console.log("onClick!")
  return state;
}

map('init', init)
map('onClick', onClick)

export const rootReducer = reducer
