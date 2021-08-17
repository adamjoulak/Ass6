import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import Login from './components/Login/Login.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Test</h1>

        <Switch>
          <Route path="/" exact component={ Login } />
         
        </Switch>

      </div> 
    </BrowserRouter>
    
  );
}

export default App;
