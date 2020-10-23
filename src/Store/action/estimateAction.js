import _, { last } from "lodash";

export const getEsitmateData = async (dispatch) => {
}

export const setEstimateGroup = data => async (dispatch) => {
    return dispatch({ type: 'SET_ESTIMATE_GROUP', payload: data })
}

export const setAddNewItem = (group, title, manufacturers, product, sf, isEdge, lf, color, depth, notes , option1, option2, option3, option4, option5, fsf,qty) => async (dispatch) => {
    const temid = new Date().getTime();
    const data = {
        "id": "product" + temid,
        "title": title,
        "manufacturer": manufacturers,
        "product": product,
        "sf" : sf,
        "lf" : lf,
        "cost" : 800,
        "isEdge" : isEdge,
        "color" : color,
        "depth": depth,
        "notes": notes,
        "fsf": fsf,
        "qty": qty,
        "options": [
            {
                "option_title": "option 1",
                "checked" : option1
            },
            {
                "option_title": "option 2",
                "checked" : option2
            },
            {
                "option_title": "option 3",
                "checked" : option3
            },
            {
                "option_title": "option 4",
                "checked" : option4
            },
            {
                "option_title": "option 5",
                "checked" : option5
            }
        ]
    }  
    const lastGroup = group.pop();
    _.set(lastGroup, 'products', [...lastGroup.products, data]); 
    group = [...group, lastGroup];
    dispatch({ type: "UPDATE_GROUP_DATA", payload: group });
}