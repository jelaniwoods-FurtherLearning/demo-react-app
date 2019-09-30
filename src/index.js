import React from 'react';
import ReactDOM from 'react-dom';

import { CarTool } from './components/CarTool'
const cars = [
  {id: 1, make: "Ford", model: "Fusion", year: 2018, color: "Silver", price: 30000},
  {id: 2, make: 'Hundai', model: 'Camero', year: 1907, color: 'Gold', price: 1000},
];

ReactDOM.render(
  <CarTool cars={cars} />,
  document.querySelector('#root'),
  
);
