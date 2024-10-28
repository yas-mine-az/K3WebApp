import React from 'react';

const Dropdown = ({ selectedArea, onAreaChange }) => {
  const areas = ['Area X', 'Area Y', 'Area Z'];

  return (
    <select value={selectedArea} onChange={(e) => onAreaChange(e.target.value)}>
      {areas.map((area) => (
        <option key={area} value={area}>
          {area}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
