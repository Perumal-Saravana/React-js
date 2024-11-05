// ParentComponent.js
import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

 const ParentComponent = () => {
 const [sharedValue, setSharedValue] = useState('');
 const handleChange = (e) => setSharedValue(e.target.value);

  return (
    <div>
      <h2>Parent Component</h2>
          <ChildA value={sharedValue} onChange={handleChange} />
          <ChildB value={sharedValue} onChange={handleChange} />
    </div>
  );
};
export default ParentComponent;