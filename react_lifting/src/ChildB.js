// ChildB.js
import React from 'react';

const ChildB = ({ value, onChange }) => {
  return (
    <div>
      <h3>Child B</h3>
      <input type="text" value={value} onChange={onChange} />
      <p>Value from ChildB: {value}</p>
    </div>
  );
};

export default ChildB;
