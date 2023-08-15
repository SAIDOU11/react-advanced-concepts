import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    if (showAlert) {
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
  };

  return (
    <div>
      <h2>Toggle Challenge</h2>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        Toggle
      </button>
      {/* Two ways to do it */}
      <br></br>
      <button onClick={toggleAlert} className="btn">
        Toggle Alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return (
    <div className="alert alert-danger">
      <h4>Show Alert</h4>
    </div>
  );
};

export default ToggleChallenge;
