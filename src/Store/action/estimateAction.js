import _, { filter, includes } from "lodash";

export const getEsitmateData = async (dispatch) => {
  return dispatch({ type: "GET_ESTIMATE_GROUP" });
};

export const setEstimateGroup = (data) => async (dispatch) => {
  return dispatch({ type: "SET_ESTIMATE_GROUP", payload: data });
};

export const setAddNewItem = (
  group,
  title,
  manufacturers,
  product,
  sf,
  isEdge,
  lf,
  color,
  depth,
  notes,
  option1,
  option2,
  option3,
  option4,
  option5,
  fsf,
  qty
) => async (dispatch) => {
  const temid = new Date().getTime();
  const data = {
    id: "product" + temid,
    title: title,
    manufacturer: manufacturers,
    product: product,
    sf: sf,
    lf: lf,
    cost: 800,
    isEdge: isEdge,
    color: color,
    depth: depth,
    notes: notes,
    fsf: fsf,
    qty: qty,
    options: [
      {
        option_title: "option 1",
        checked: option1,
      },
      {
        option_title: "option 2",
        checked: option2,
      },
      {
        option_title: "option 3",
        checked: option3,
      },
      {
        option_title: "option 4",
        checked: option4,
      },
      {
        option_title: "option 5",
        checked: option5,
      },
    ],
  };
  const lastGroup = group.pop();
  _.set(lastGroup, "products", [...lastGroup.products, data]);
  group = [...group, lastGroup];
  dispatch({ type: "UPDATE_GROUP_DATA", payload: group });
};
export const setUpdataItem = (groupsData, data, id) => async (dispatch) => {
  groupsData.forEach((element, ind) => {
    element.products.forEach((product, index) => {
      if (product.id == id) {
        const newProduct = { ...product, ...data };
        _.update(groupsData, `[${ind}]["products"][${index}]`, function (n) {
          return newProduct;
        });
      }
    });
  });

  dispatch({ type: "UPDATE_GROUP_DATA", payload: groupsData });
};
