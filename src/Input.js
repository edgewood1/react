import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './features/sampleSlice';

const Input = () => {
  // sets state for function
  const inputRef = React.useRef();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem(inputRef.current.value));
    inputRef.current.value = '';
  };

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input ref={inputRef} id="search" type="text" />
      <button onClick={handleClick} type="submit">
        {' '}
        submit{' '}
      </button>
    </div>
  );
};

export default Input;
