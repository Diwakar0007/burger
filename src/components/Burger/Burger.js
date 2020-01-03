import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
     .map(igkey => {
         //console.log(props.ingredients[igkey]);
         return [...Array(props.ingredients[igkey])].map((_,i) => {
         return <BurgerIngredient key={igkey+i} type={igkey} />
     });
    })
    .reduce((arr,el) => {
        return arr.concat(el)
    }, []);

if(transformedIngredient.length === 0){
    transformedIngredient = <p>Please start adding ingredients!</p>
}

  return(
      <div className="Burger">
          <BurgerIngredient type="bread-top"/>
          {transformedIngredient}
          <BurgerIngredient type="bread-bottom"/>
      </div>
  );
}

export default burger