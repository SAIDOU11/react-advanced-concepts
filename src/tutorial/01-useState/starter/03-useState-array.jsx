import { useState } from 'react';
import { data } from '../../../data.js';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    console.log(id);
    const removeOneItem = people.filter((person) => person.id !== id);
    setPeople(removeOneItem);
  };
  const clearAllItems = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)} type="button">
              Remove
            </button>
          </div>
        );
      })}
      <button
        onClick={clearAllItems}
        className="btn"
        style={{ marginTop: '2em' }}
      >
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;

/*

 const removeItem = (id) => {
   console.log(id);
   setPeople(people.filter((person) => person.id !== id));
 };

 */
