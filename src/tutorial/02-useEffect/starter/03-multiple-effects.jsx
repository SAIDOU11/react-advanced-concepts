import { useState, useEffect } from 'react';

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [seconValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('Log first value');
  }, [value]);

  useEffect(() => {
    console.log('Log second value');
  }, [seconValue]);

  return (
    <div>
      <h1>Value: {value} </h1>
      <button
        style={{ marginBottom: '2em' }}
        onClick={() => setValue(value + 1)}
        className="btn"
      >
        click me
      </button>
      <h1>Second value: {seconValue} </h1>
      <button onClick={() => setSecondValue(seconValue + 1)} className="btn">
        click me
      </button>
    </div>
  );
};

export default MultipleEffects;
