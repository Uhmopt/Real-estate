export const addExpenses = (expense, cost) => async (dispatch) => {
    const addData = {expense: expense, cost: parseInt(cost)};
    dispatch({ type: "SET_ADD_EXPENSE", payload: addData });
}