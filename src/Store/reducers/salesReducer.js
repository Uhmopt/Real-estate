import initState1 from "../../Marteknology.json"; 
const initState = {
    salesData: initState1.sales.discounts,
    afterTotal : 0
}
const SalesReducer = (state = initState, action) => { 
    switch (action.type) {
        case "SET_ADD_DISCOUNT": 
            return {
                ...state,
                salesData: [...state.salesData, action.payload]
            }
        case "SET_AFTER_TOTAL":
            return {
                ...state,
                afterTotal: action.payload
            }
        case "DELETE_SALES_DATA": {
            return {
                ...state,
                salesData: [...action.payload]
            }
        }
        default:
            return state;
    }
}
export default SalesReducer