import { map, reducer } from "./utils/redux-map";
import {
} from "./mutators"
import {
} from "../selectors/selectors"

export const initialState = {
  clickedOn: "Why not click a bit?"
}

const init = (state, action) => {
  console.log("init!")
  return state
}

const onClick = (state, action) => ({
  ...state,
  clickedOn: "You last clicked on " + new Date()
})

map('init', init)
map('onClick', onClick)

export const rootReducer = reducer
