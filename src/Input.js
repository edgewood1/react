import React from 'react';

const Input = (props) => {
  // sets state for function
  const inputRef = React.useRef();
  
  const handle = () => {
    props.click();
    inputRef.current.value = '';
  };

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input ref={inputRef} id="search" type="text" onChange={props.search} />
      <button onClick={handle} type="submit">
        {' '}
        submit{' '}
      </button>
    </div>
  );
};

export default Input;
