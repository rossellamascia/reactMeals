import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForms from "./MealItemForms";

const MealItem = (props) => {

  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onAddToCart = (amount) =>{
    ctx.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        amount: amount
    })
  };

  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForms onAddToCart={onAddToCart}/>
      </div>
    </li>
  );
};
export default MealItem;
