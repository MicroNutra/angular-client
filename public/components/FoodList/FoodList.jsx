import React from 'react';

const FoodList = (props) => {
  return (
    <ul>
      {
        props.foods.map(food => <li key={ food.id }>{ food.name }</li>)
      }
    </ul>
  )
}

export default FoodList;
