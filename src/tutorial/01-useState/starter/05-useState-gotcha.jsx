import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = (currentState) => {
    setValue((currentState) => {
      console.log(currentState + 1);
      return currentState + 1;
    });
  };

  return (
    <div>
      <h1>UseState "Gotcha"</h1>
      <h2>{value} </h2>
      <button
        onClick={handleClick}
        style={{ marginTop: '2.5em' }}
        className="btn"
      >
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
