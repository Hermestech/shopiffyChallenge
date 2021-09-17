import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./components/Pages/Home";
import Landing from "./components/Background"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path='/' component={Landing}/>
          <Route exact path ='/home' component={Home}/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
