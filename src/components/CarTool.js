import React, { useState } from 'react'

export const CarTool = (props) => {

  const [ carForm, setCarForm ] = useState({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const [ cars, setCars ] = useState(props.cars.concat());

  const change = (e) => {
    setCarForm({
      ...carForm,
      [e.target.name]: e.target.type === 'number'
      ? Number(e.target.value) : e.target.value,
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
    <header>
      <h1> Car Tool</h1>
    </header>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
       {cars.map(car => <tr key={car.id}>
         <td>{car.id}</td>
         <td>{car.make}</td>
         <td>{car.model}</td>
         <td>{car.year}</td>
         <td>{car.color}</td>
         <td>{car.price}</td>
       </tr>)}
      </tbody>
    </table>

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
