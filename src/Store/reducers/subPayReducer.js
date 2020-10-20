import initState1 from "../../Marteknology.json"; 
const initState = {
    subPayData: initState1.subpay.expenses
}
const SubPayReducer = (state = initState, action) => { 
    switch (action.type) {
        case "SET_ADD_EXPENSE": 
            return {
                ...state,
                subPayData: [...initState.subPayData, action.payload]
            }
        default:
            return state;
    }
}
export default SubPayReducer