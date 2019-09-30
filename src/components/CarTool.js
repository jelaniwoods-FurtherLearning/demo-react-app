import React from 'react'

export const CarTool = () => {

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
        <tr>
          <td>1</td>
          <td>Ford</td>
          <td>Fusion</td>
          <td>2018</td>
          <td>Silver</td>
          <td>30000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Hundai</td>
          <td>Camero</td>
          <td>1907</td>
          <td>Gold</td>
          <td>1000</td>
        </tr>
      </tbody>
    </table>
  </>
  )
}
