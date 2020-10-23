import initState1 from "../../Marteknology.json";
const initState = {
    groupData: initState1.groups,
}
const EstimateReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_GROUP_DATA':
            return {
                groupData: [...action.payload]
            }
        case 'SET_ESTIMATE_GROUP':
            state.groupData = [...action.payload]
            return state
        default:
            return state;
    }
}
export default EstimateReducer