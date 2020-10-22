import { combineReducers } from "redux";
import esitmateReducer from "./esitmateReducer";
import subPayReducer from "./subPayReducer";
import salesReducer from "./salesReducer";
import groupReducer from "./groupReducer";
const rootReducer = combineReducers({
    esitmate: esitmateReducer,  
    subPay: subPayReducer,
    sales: salesReducer,
    group: groupReducer
});
export default rootReducer;