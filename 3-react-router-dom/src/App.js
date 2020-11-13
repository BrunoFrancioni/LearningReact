import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import WhoIAm from './pages/WhoIAm';

function App() {
  return (
    <div className="App">
      <h1>React Router DOM</h1>

      <Router>
        <div>
          <Link to='/'>
              <button>Home</button>
          </Link>
          <Link to='/contact'>
            <button>Contact</button>
          </Link>
          <Link to='whoiam'>
            <button>Who I am</button>
          </Link>
        </div>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/whoiam">
            <WhoIAm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
