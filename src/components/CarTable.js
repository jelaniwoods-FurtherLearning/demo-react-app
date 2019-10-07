import React from 'react';
import PropTypes from 'prop-types'

import { carsPropType } from './propTypes/cars';
import {ViewCarRow } from '../components/ViewCarRow'

export const CarTable = ({
   cars,
  onDeleteCar: deleteCar,
 }) => {

  return <table>
      <thead>
        <tr>
          <th>Id</th>
          <th><label htmlFor="edit-make-input">Make</label></th>
          <th><label htmlFor="edit-model-input">Model</label></th>
          <th><label htmlFor="edit-year-input">Year</label></th>
          <th><label htmlFor="edit-color-input">Color</label></th>
          <th><label htmlFor="edit-price-input">Price</label></th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { cars.length === 0 && <tr>
          <td colSpan="6">There are no cars.</td>
        </tr>}
       {cars.map(car => <ViewCarRow
        key={car.id}
        car={car}
        onDeleteCar={deleteCar} />
       )}
      </tbody>
    </table>
};

CarTable.defaultProps = {
  cars: [],
};

CarTable.propTypes = {
  cars: carsPropType,
  onDeleteCar: PropTypes.func.isRequired,
};
