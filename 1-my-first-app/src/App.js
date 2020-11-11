import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';
import ByeWorld from './components/ByeWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <br />
        <ByeWorld />
      </header>
    </div>
  );
}

export default App;
