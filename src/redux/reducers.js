import * as actions from "./actions"
import { map, reducer } from "./utils/redux-map";
import { mutatorToReducer, ArrayUtils, reduceAll } from "../utils";
import {
} from "./mutators"
import {
} from "../selectors/selectors"
import {
    init
} from "./actions"

export const initialState = {
}

map('init', init)

export const rootReducer = reducer