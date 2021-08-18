import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import Login from './components/Login/Login.js';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import Translation from './components/Translation/Translation';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/translation" component={Translation} />
        <Route path="/profile" component={Profile} />
        <Route path="*" component={NotFound} />
        
      </Switch>

      
    </BrowserRouter>

  );
}

export default App;
