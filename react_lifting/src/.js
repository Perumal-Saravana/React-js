// ChildB.js
import React from 'react';

const ChildB = ({ value, onChange }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <p>Value from ChildB: {value}</p>
    </div>
  );
};

export default ChildB;
