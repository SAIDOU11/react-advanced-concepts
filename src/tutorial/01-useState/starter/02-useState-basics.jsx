import { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((currentState) => {
      return currentState + 1;
    });
  };
  return (
    <div>
      <h1>{count} </h1>
      <button
        style={{ marginTop: '2em' }}
        onClick={handleClick}
        className="btn"
      >
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
