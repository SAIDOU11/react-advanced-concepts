import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'Scream at the computer',
  });

  const displayPerson = () => {
    setPerson({ name: 'Saidou', age: 33, hobby: 'Working Out' });
    // setPerson({ ...person, name: 'John' });
  };
  const { name, hobby, age } = person;
  return (
    <div>
      <h4>{name} </h4>
      <h4>{age} </h4>
      <h4>Enjoys : {hobby} </h4>
      <button
        onClick={displayPerson}
        style={{ marginTop: '2.5em' }}
        className="btn"
      >
        Show Saidou
      </button>
    </div>
  );
};

export default UseStateObject;
