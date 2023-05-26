import { useContext } from "react";
import classes from "./ArrangingAvailableMeals.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../Store/Cart-context";

const ArrangingAvailableMeals = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  function addCartHandler(amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onSubmitForm={addCartHandler} />
      </div>
    </li>
  );
};

export default ArrangingAvailableMeals;
