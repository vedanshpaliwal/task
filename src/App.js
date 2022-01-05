import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Sign from './components/Sign';


function App() {
  return (
    <div className="App">
      
      <Router>



        <Switch>
          <Route exact path='/' ><Home /></Route>
          <Route exact path='/home' ><Home /></Route>

          <Route exact path='/signup' > <Sign/> </Route>

         



        </Switch>




      </Router>



    </div>

  );
}

export default App;
