import Sidebar from './Sidebar';
import Home from './Home';
import Inventory from './Inventory';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/inventory">
              <Inventory/>
            </Route>
            {/* <Route exact path="/tasks">
              <Tasks/>
            </Route>
            <Route exact path="/people">
              <People/>
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
