import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('Say Hello');
  };
  sayHello();

  useEffect(() => {
    console.log('Log useEffect');
  }, []);

  return (
    <div>
      <h1>Value: {value} </h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        Click me
      </button>
    </div>
  );
};

export default UseEffectBasics;
