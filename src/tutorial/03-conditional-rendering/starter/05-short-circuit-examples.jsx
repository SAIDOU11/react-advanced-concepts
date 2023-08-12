import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'default value'} </h2>
      {text && (
        <div>
          <h2>Whatever return</h2>
          <h2>{name} </h2>
        </div>
      )}
      {/* {!text || (
        <div>
          <h2>Whatever return</h2>
          <h2>{name} </h2>
        </div>
      )} */}
      {user && <SomeComponent blaz={user.name} />}
      {/* Props = .. */}
    </div>
  );
};

const SomeComponent = ({ blaz }) => {
  // Props .. = blaz
  return (
    <div>
      <h2>Whatever return</h2>
      <h2>{blaz}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
