import Sidebar from './Sidebar';
import Home from './Home';
import './index.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
