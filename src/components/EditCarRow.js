import React from 'react';

import PropTypes from 'prop-types';
import {carPropType } from '../propTypes/cars';

import {useForm} from './hooks/useForm';



export const EditCarForm = (
  car,
  onSaveCar,
  onCancelCar: cancelCar,
  ) => {


    const [carForm, change] = useForm({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });

    const saveCar = () => {
      onSaveCar({
        ...carForm,
        id: car.id,
      });
    };


    return (
      <tr>
        <td>{car.id}</td>
        <td>
          <input type="text" id="edit-make-input" name="make"
           value={carForm.make} onChange={change} />
        </td>
        <td>
          <input type="text" id="edit-model-input" name="model"
           value={carForm.model} onChange={change} />
        </td>
        <td>
          <input type="text" id="edit-year-input" name="year"
           value={carForm.year} onChange={change} />
        </td>
        <td>
          <input type="text" id="edit-color-input" name="color"
           value={carForm.color} onChange={change} />
        </td>
        <td>
          <input type="text" id="edit-price-input" name="price"
           value={carForm.price} onChange={change} />
        </td>
        <td><button type="button" onClick={() => saveCar}>Save</button></td>
        <td><button type="button" onClick={() => cancelCar(car.id)}>Cancel</button></td>
    </tr>
    )
};

EditCarRow.propTypes = {
  cars: carPropType.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
}
