export const addExpenses = (expense, cost) => async (dispatch) => {
    const addData = { expense: expense, cost: parseInt(cost) };
    console.log(addData, "addData");
    dispatch({ type: "SET_ADD_EXPENSE", payload: addData });
}
export const setTotalPay = (feeData, expenseData, dailyCost) => async (dispatch) => {
    
    let expenseCost = 0;
    expenseData.forEach(item => {
        expenseCost += item.cost;
    })
    let fee = 0; 
    feeData.forEach(item => {
        fee += item.cost
    }) 
    console.log(dailyCost,"dailyCost")
    const totalCost = expenseCost + fee + Number(dailyCost);
    console.log(totalCost, "masna")
    dispatch({ type: "SET_TOTAL_SUBPAY", payload: totalCost });
}