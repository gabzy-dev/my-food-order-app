import React, { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  // const defaultCartState = {
  //   items: [],
  //   totalAmount: 0,
  // };

  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const newCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (newCartItem) {
      const updatedItem = {
        ...newCartItem,
        amount: newCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const itemRemove = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - itemRemove.price;

    let updatedItems;
    if (itemRemove.amount === 1) {
      state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...itemRemove, amount: itemRemove.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemHandeler(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }
  function removeItemHandler(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandeler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
