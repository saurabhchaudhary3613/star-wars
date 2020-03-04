import React from 'react';

const Planet = ({ planet }) => {
  return (
    <li className='collection-item'>
      <div>
        <h3>{planet.name}</h3>
        <div>
          <div>
            <span>Poputation: </span>
            {}
            <span>{planet.population}</span>
          </div>
          <div>
            <span>Rotation Period: </span>
            <span>{planet.rotation_period}</span>
          </div>
          <div>
            <span>Orbit Period: </span>
            <span>{planet.orbital_period}</span>
          </div>
          <div>
            <span>Diameter: </span>
            <span>{planet.diameter}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Planet;
