import { map, reducer } from "./utils/redux-map";
import {
} from "./mutators"
import {
} from "../selectors/selectors"
import Actions from "./actions"

export const initialState = {
  clickedOn: "Why not click a bit?"
}

const init = (state, action) => {
  console.log("init!")
  return state
}

const onClick = (state, action) => ({
  ...state,
  clickedOn: "You last clicked on " + new Date() + " from " + action.event.target.name
})

map(Actions.init, init)
map(Actions.onClick, onClick)

export const rootReducer = reducer
