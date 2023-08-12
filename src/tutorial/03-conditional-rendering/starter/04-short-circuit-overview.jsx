import { useState } from 'react';

const ShortCircuitOverview = () => {
  // Falsy
  const [text, setText] = useState('');
  // Truthy
  const [name, setName] = useState('Saidou');

  const codeExample = text || 'Just Code  Example';

  return (
    <div>
      <h4>Falsy OR : {text || 'Hello World'} </h4>
      <h4>Falsy AND : {text && 'Hello World'} </h4>
      <h4>Truthy OR : {name || 'Hello World'} </h4>
      <h4>Truthy AND : {name && 'Hello World'} </h4>
      <p style={{ fontSize: '2rem', color: 'red' }}>{codeExample}</p>
    </div>
  );
};

export default ShortCircuitOverview;
