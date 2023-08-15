import { useEffect } from 'react';
import { useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');
  return (
    <div>
      <button onClick={() => setToggle(!toggle)} className="btn">
        Toggle Component
      </button>
      {toggle && <RandomComponent />}{' '}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // Some logic
    };
    window.addEventListener('scroll', someFunc);
    window.removeEventListener('scroll', someFunc);
  }, []);
  return <h1>Hello Wold</h1>;
};

export default CleanupFunction;
