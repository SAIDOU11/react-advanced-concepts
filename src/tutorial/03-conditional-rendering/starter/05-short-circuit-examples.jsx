import { useState } from 'react';

const ShortCircuitExamples = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('Susan');
  const [user, setUser] = useState({ name: 'John' });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h2>{text || 'default value'} </h2>
      {user && <SomeComponent name={user.name} />}
      {text && (
        <div>
          <h2 style={{ color: 'red' }}>{name} </h2>
        </div>
      )}
      {/* {!text || (
        <div>
          <h2 style={{ color: 'red' }}>{name} </h2>
        </div>
      )} */}
      <h2 style={{ marginTop: '1.5em' }}>Ternary Operator : </h2>
      <button style={{ marginBottom: '1.5em' }} className="btn" type="button">
        {isEditing ? 'edit' : 'add'}
      </button>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2 style={{ color: 'red' }}>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
