import React from 'react';

const fruits = ['apple', 'banana', 'orange', 'mango'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}> {fruit} </li>
      ))}
    </ul>
  );
}

export default FruitList;