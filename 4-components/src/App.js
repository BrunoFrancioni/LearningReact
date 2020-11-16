import './App.css';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [stateText, setStateText] = useState('Welcome to miau');

  const handleClick = () => {
    console.log('I\'ve been clicked');
  }

  const ChangeTextFromState = () => {
    setStateText('Hello World');
  }

  return (
    <div className="App">
      <Header text={ 'Welcome miau' } handleClick={ handleClick }/>

      <p onClick={ ChangeTextFromState }>{ stateText }</p>
    </div>
  );
}

export default App;
