import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import Login from './components/Login/Login.js';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Test</h1>

        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="*" component={ NotFound } />
        </Switch>

      </div> 
    </BrowserRouter>
    
  );
}

export default App;
