import { combineReducers } from "redux";
import esitmateReducer from "./esitmateReducer";
import subPayReducer from "./subPayReducer";
import salesReducer from "./salesReducer";
const rootReducer = combineReducers({
    esitmate: esitmateReducer,  
    subPay: subPayReducer,
    sales: salesReducer
});
export default rootReducer;