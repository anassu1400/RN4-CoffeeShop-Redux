import * as actionTypes from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      if (
        !state.items.find(
          item =>
            item.drink === action.payload.drink &&
            item.option === action.payload.option
        )
      ) {
        return {
          ...state,
          items: state.items.concat({ ...action.payload, quantity: 1 })
        };
      } else {
        let repeated = state.items.find(
          item =>
            item.drink === action.payload.drink &&
            item.option === action.payload.option
        );
        let newItems = [...state.items];
        newItems.splice(state.items.indexOf(repeated), 1, {
          ...repeated,
          quantity: repeated.quantity + 1
        });
        return {
          ...state,
          items: newItems
        };
      }
    case actionTypes.REMOVE_ITEM:
      const itemToRemove = state.items.find(
        item =>
          action.payload.drink === item.drink &&
          action.payload.option === item.option
      );
      const newItems = state.items.filter(
        item =>
          item.drink !== itemToRemove.drink &&
          item.option !== itemToRemove.option
      );
      return {
        ...state,
        items: newItems
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
