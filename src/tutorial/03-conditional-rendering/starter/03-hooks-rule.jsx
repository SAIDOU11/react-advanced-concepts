import { useState, useEffect } from 'react';

const Example = () => {
  const [condition, setCondition] = useState(true);
  if (condition) {
    // won't work.. CAN NOT USE HOOKS IN CONDITIONS
    const [state, setState] = useState(false);
  }

  // if (condition) {
  //   return <h2>Hello There</h2>;
  // }
  // // this will also fail .. WE CALL THE useEffect before the condition
  // useEffect(() => {
  //   console.log('hello there');
  // }, []);
  return <h2>example</h2>;
};

export default Example;
