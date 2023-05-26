import { useContext } from "react";
import Modal from "../Ui/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function cartItemRemoveHandler(id) {
    cartCtx.removeItem(id);
  }
  function cartItemAddHandler(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          amount={item.amount}
          name={item.name}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal close={props.onCloseModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseModal}>
          Close
        </button>
        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
