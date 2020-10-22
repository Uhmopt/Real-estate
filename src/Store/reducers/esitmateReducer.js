import initState1 from "../../Marteknology.json"; 
const EstimateReducer = (state = initState1, action) => {
    switch (action.type) {
        case 'SET_ESTIMATE_GROUP':
            state.groups.group1 = [...action.payload]
            return state

        default:
            return state;
    }
}
export default EstimateReducer