import { combineReducers } from "redux"
import esitmateReducer from "./esitmateReducer"
const rootReducer = combineReducers({
    esitmate: esitmateReducer
});
export default rootReducer;