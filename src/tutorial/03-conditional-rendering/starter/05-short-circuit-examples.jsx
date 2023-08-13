import { useState, useEffect } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Susan');
  const [user, setUser] = useState({ name: 'John' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'default value'} </h2>
      {text && (
        <div>
          <h2>Wathever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* {!text && (
        <div>
          <h2>Wathever return</h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ fontWeight: 'bold', color: '#cc6161', margin: '1em 0' }}>
        Ternary Operator
      </h2>
      <button style={{ marginBottom: '1em' }} className="btn">
        {isEditing ? 'edit' : 'add'}
      </button>
      {user ? (
        <div>
          <h4>Hello there user {user.name} </h4>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
        </div>
      )}
    </div>
  );
};

// props ({name})
const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Wathever return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
