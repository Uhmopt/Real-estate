export const addDiscount = (discount, amount) => async (dispatch) => {
    const addData = { attr1: discount, cost: parseInt(amount) };
    dispatch({ type: "SET_ADD_DISCOUNT", payload: addData });
}
export const setTotalSale = (expenseData, preDiscountTotal) => async (dispatch) => {
    
    let expenseCost = 0;
    expenseData.forEach(item => {
        expenseCost += item.cost;
    }) 
    const afterTotal = preDiscountTotal + expenseCost;
    dispatch({ type: "SET_AFTER_TOTAL", payload: afterTotal });
}