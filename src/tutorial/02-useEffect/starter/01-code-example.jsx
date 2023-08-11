import { useState, useEffect } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('Log from useEffect');
  }, []);
  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        click me
      </button>
    </div>
  );
};

export default CodeExample;
