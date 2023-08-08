const ErrorExample = () => {
  let count = 0;
  const handleClickBtn = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div>
      <h2> {count}</h2>
      <button type="button" onClick={handleClickBtn} className="btn">
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
