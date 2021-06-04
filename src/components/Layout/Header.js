import classes from'./Header.module.css';

import img from '../../assets/img/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {

  return (
        <>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowModal}/>
            <div className={classes['main-image']}>
                <img src={img} alt="food"/>
            </div>
        </header>
        </>
  )
};
export default Header;