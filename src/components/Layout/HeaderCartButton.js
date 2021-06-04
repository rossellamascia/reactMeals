import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    console.log('curNumber', curNumber + item.amount);

        return curNumber + item.amount
    },0)
    console.log('numberOfCartItems', numberOfCartItems);

  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your cart
        </span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
  )
};
export default HeaderCartButton;