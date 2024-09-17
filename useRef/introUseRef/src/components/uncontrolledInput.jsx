import React, { useRef, useState } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null); // useRef to store the input field reference
  const [inputValue, setInputValue] = useState(''); // Local state to display input value

  const handleInput = () => {
    setInputValue(inputRef.current.value); // Get value directly from input field using useRef
  };

  return (
    <div>
      <h2>Uncontrolled Input Field</h2>
      <input ref={inputRef} type="text" onInput={handleInput} placeholder="Type here" />
      <p>Current input value: {inputValue}</p>
    </div>
  );
};

export default UncontrolledInput;
