import * as actionTypes from "./types";

//anas
export const addItemToCart = Item => ({
  type: actionTypes.ADD_ITEM,
  payload: Item
});

export const removeItemFromCart = Item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: Item
});

export const checkout = () => ({
  type: actionTypes.CHECKOUT
});
