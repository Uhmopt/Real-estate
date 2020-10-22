export const getEsitmateData = async (dispatch) => {
}

export const setEstimateGroup = data => async (dispatch) => {
    return dispatch({ type: 'SET_ESTIMATE_GROUP', payload: data })
}