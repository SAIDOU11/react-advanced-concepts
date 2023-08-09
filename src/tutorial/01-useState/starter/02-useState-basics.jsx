import { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button onClick={handleClick} className="btn">
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;

/*
console.log(useState()); Default value, fuunction
  const [count, setCount] = useState(0); [] convention count, setCount() for the function
*/
