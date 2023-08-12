import { useState, useEffect } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // Done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading ... </h2>;
  }
  return (
    <div>
      <h2>Multiple Returns Basics</h2>
    </div>
  );
};

export default MultipleReturnsBasics;
