import React, { useEffect, useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null); // Initialize useRef to hold a reference to the input element

  // useEffect to focus the input when the component mounts
  useEffect(() => {
    inputRef.current.focus(); // Focus the input field
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div>
      <h2>Auto Focus Input Field</h2>
      <input ref={inputRef} type="text" placeholder="This field is focused on load" />
    </div>
  );
};

export default FocusInput;
