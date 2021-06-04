import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForms = (props) => {
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  const summitHandle = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    } else {
      props.onAddToCart(enteredAmountNumber);
    }
  };
  return (
    <form className={classes.form} onSubmit={summitHandle}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>errore</p>}
    </form>
  );
};
export default MealItemForms;
