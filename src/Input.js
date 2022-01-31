import React from 'react';

const Input = (props) => {
  const inputRef = React.useRef();

  const handleClick = () => {
    props.handleUpdates('addItem', inputRef.current.value);
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
