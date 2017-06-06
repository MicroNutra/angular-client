import React from 'react';
console.log("foods");
const FoodSearch = (props) => {
  return (
    <ul>
      {
        props.foods.map(food => <li key={ food.id }>{ food.name }</li>)
      }
    </ul>
  )
}

export default FoodSearch;
