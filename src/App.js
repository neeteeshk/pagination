import './App.css';
import Home from './components/Home';
import Inside from './components/Inside';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/inside" component={Inside} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
