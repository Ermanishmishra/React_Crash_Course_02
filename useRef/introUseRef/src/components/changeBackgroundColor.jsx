import React, { useRef } from 'react';

const ChangeBackgroundColor = () => {
  const divRef = useRef(null); // useRef to store the reference of the div element

  const handleClick = () => {
    // Toggle background color of the div when clicked
    const currentColor = divRef.current.style.backgroundColor;
    divRef.current.style.backgroundColor = currentColor === 'lightblue' ? 'lightgreen' : 'lightblue';
  };

  return (
    <div>
      <h2>Click to Change Background Color</h2>
      <div
        ref={divRef}
        onClick={handleClick}
        style={{ width: '200px', height: '200px', backgroundColor: 'lightblue', cursor: 'pointer' }}
      >
        Click me!
      </div>
    </div>
  );
};

export default ChangeBackgroundColor;
