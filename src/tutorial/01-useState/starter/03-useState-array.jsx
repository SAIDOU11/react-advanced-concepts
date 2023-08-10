import { useState } from 'react';
import { data } from '../../../data.js';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  const ClearAllItems = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name} </h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        onClick={ClearAllItems}
        style={{ marginTop: '2.5em' }}
        className="btn"
      >
        Click me
      </button>
    </div>
  );
};

export default UseStateArray;

/*

 const removeItem = (id) => {
   console.log(id);
   setPeople(people.filter((person) => person.id !== id));
  if the person.id [DOES NOT MATCH] !== id
  RETURN A NEW ARRAY WITHOUT THE ID JUST DELETED

   person.id === id will delete everything except that one !
 };

 */
