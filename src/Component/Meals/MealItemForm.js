import React, { useRef, useState } from "react";
import MealInput from "../Ui/MealInput";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountToNumber = +enteredAmount;
    console.log(enteredAmountToNumber);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountToNumber < 1 ||
      enteredAmountToNumber > 5
    ) {
      return setAmountIsValid(false);
    }
    props.onSubmitForm(enteredAmountToNumber);
  }

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <MealInput
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount",
          type: "number",
          step: "1",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button onClick={submitFormHandler}>+ add</button>
      {!amountIsValid && <p>enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
