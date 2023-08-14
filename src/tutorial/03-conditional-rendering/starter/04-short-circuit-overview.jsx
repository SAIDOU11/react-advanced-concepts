import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [falsy, setFalsy] = useState('');
  const [name, setName] = useState('Susan');

  const codeExample = 'Hello World';

  return (
    <div>
      <h2>{falsy || 'This is a falsy value'} </h2>
      <h2>{falsy && 'No display at all'} </h2>
      <h2>{name || 'This is a falsy value'} </h2>
      <h2>{name && "This one we'll be display "} </h2>
      <h2 style={{ color: 'red' }}>{codeExample}</h2>
    </div>
  );
};

export default ShortCircuitOverview;
