import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <Clock location="New York" offset={-5} />}
      {isVisible && <Clock location="Kyiv" offset={2} />}
      {isVisible && <Clock location="London" offset={0} />}
    </>
  );
};

export default App;
