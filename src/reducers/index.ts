import { combineReducers } from "redux"
import count from "./count"

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  count,
})

export default rootReducer
