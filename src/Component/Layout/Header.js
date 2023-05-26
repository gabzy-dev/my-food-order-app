import { Fragment } from "react";
import meals from "../../Assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Gabzys restaurant</h1>
        <HeaderCartButton onClick={props.onShowModal} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
