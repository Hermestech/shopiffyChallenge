import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./components/Pages/Home";
import Error404 from './components/Error404';
import Landing from "./components/Background"


function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path ='/home' component={Home}/>
          <Route path='*' component={Error404}/>
      </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
