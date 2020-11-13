import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';
import ByeWorld from './components/ByeWorld';
import SayHi from './components/SayHi';
import PictureAsAComponent from './components/PictureAsAComponent';

function App() {
  const userInfo = {
    name: "Bruno",
    age: 22
  };

  const sayHi = (name, age) => {
    console.log(`Hi ${name}, your age is ${age}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <br />
        <SayHi userInfo={ userInfo } sayHi={ sayHi } />
        <br />
        <PictureAsAComponent />
        <br />
        <ByeWorld />
      </header>
    </div>
  );
}

export default App;
