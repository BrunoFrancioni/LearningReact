import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    return () => {
      
    }
  }, [count]);

  const encenderApagar = () => {
    setStateCar(!stateCar);
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h3>The car is: { stateCar ? 'on' : 'off'}</h3>

        <button onClick={ encenderApagar }>Encender/Apagar</button>

        <h4>Clicks: { count }</h4>
      </header>
    </div>
  );
}

export default App;
