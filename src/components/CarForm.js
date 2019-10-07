import React from "react";
import PropTypes from 'prop-types';

import {useForm} from './hooks/useForm';

export const CarForm = ({ onSubmitCar, buttonText }) => {
  const [carForm, change, resetCarForm] = useForm({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });


  const submitCar = () => {
    onSubmitCar({ ...carForm });
    resetCarForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input id="make-input" type="text" name="make"
          value={carForm.make} onChange={change} />
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
      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
  )
}

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

CarForm.proptTypes = {
  buttonText: PropTypes.string,
  onSubmitCar: PropTypes.func.isRequired,
}
