import React, { useState } from 'react'

import {ToolHeader} from './ToolHeader'
import {CarTable} from './CarTable'

export const CarTool = ({ cars: initialCars}) => {

  const [ carForm, setCarForm ] = useState({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const [ cars, setCars ] = useState(initialCars.concat());

  const change = ({ target: {name, type, value} }) => {
    setCarForm({
      ...carForm,
      [name]: type === 'number'
      ? Number(value) : value,
    });
  };

  const addCar = () => {
    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(c => c.id)) + 1,
    }));

    setCarForm({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    })
  }

  return (
  <>
    <ToolHeader headerText="Car Tool" />
    <CarTable cars={cars} />
    

    <form>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input id="make-input" type="text" name="make"
          value={carForm.make} onChange={change}/>
      </div>
      <div>
        <label htmlFor="model-input">Model:</label>
        <input id="model-input" type="text" name="model"
         value={carForm.model} onChange={change} />
      </div>
      <div>
        <label htmlFor="year-input">Year:</label>
        <input id="year-input" type="number" name="year"
          value={carForm.year} onChange={change} />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input id="color-input" type="text" name="color"
         value={carForm.color} onChange={change} />
      </div>
      <div>
        <label htmlFor="price-input">Price:</label>
        <input id="price-input" type="number" name="price"
         value={carForm.price} onChange={change} />
      </div>
      <button type="button" onClick={addCar}>Add Car</button>
    </form>
  </>
  )
}
