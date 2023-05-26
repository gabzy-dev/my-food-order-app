import React from "react";
import classes from "./AvailableMeals.module.css";
import ArrangingAvailableMeals from "./ArrangingAvailableMeals";
import Card from "../Ui/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

// const food = DUMMY_MEALS.map((meals) => (
//   <li key={meals.id}>
//     <ArrangingAvailableMeals
//       id={meals.id}
//       name={meals.name}
//       description={meals.description}
//       price={meals.price}
//     />
//   </li>
// ));
//

const AvailableMeals = (props) => {
  const food = DUMMY_MEALS.map((meal) => (
    <ArrangingAvailableMeals
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Card>
      <div className={classes.meals}>
        <ul>{food}</ul>
      </div>
    </Card>
  );
};
export default AvailableMeals;
