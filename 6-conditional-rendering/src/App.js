import './App.css';
import Avatar from './components/Avatar';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Example o the avatars</h1>
          <Avatar id="2" size="small" name="JSXlady" />
          <Avatar id="3" name="Layla" />
          <Avatar id="1" size="large" name="Emma" />
          <hr />
          <h1>Ejxample of a counter</h1>
          <Counter />
    </div>
  );
}

export default App;
