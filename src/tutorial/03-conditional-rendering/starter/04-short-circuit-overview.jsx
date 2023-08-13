import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');

  // truthy
  const [name, setName] = useState('Susan');

  const someValue = 'Some Value ';

  return (
    <div>
      <h3>{text || 'default value'} </h3>
      <h3>{text && 'default value'} </h3>
      <h3>{name || 'default value'} </h3>
      <h3>{name && 'default value'} </h3>
      <h4 style={{ color: 'red' }}>{someValue}</h4>
    </div>
  );
};

export default ShortCircuitOverview;
