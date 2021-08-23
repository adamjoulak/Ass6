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
import NavigationBar from './components/Navbar/NavigationBar';


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
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
