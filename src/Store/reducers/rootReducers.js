import { combineReducers } from "redux"
import esitmateReducer from "./esitmateReducer"
import subPayReducer from "./subPayReducer"
const rootReducer = combineReducers({
    esitmate: esitmateReducer,  
    subPay: subPayReducer
});
export default rootReducer;