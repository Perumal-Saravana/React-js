// ChildA.js
import React from 'react';

const ChildA = ({ value, onChange }) => {
  return (
    <div>
      <h3>Child A</h3>
      <input type="text" value={value} onChange={onChange} />
      <p>Value from ChildA: {value}</p>
    </div>
  );
};

export default ChildA;
