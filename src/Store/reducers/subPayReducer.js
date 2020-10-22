import initState1 from "../../Marteknology.json";
const initState = {
    subPayData: initState1.subpay.expenses,
    totalSubPay: 0
}

const SubPayReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_ADD_EXPENSE":
            return {
                ...state,
                subPayData: [...state.subPayData, action.payload]
            }
        case "SET_TOTAL_SUBPAY":
            return {
                ...state,
                totalSubPay: action.payload
            }
        case "DELETE_EXPENSE": {
            return {
                ...state,
                subPayData: [...action.payload]
            }
        }
            
        default:
            return state;
    }
}
export default SubPayReducer