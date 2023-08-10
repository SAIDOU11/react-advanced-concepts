import { useState } from 'react';

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Error Example</h1>
      <h2>{count}</h2>
      <button
        onClick={handleClick}
        className="btn"
        style={{ marginTop: '2em' }}
      >
        Click me
      </button>
    </>
  );
};

export default ErrorExample;
