import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Inicio } from './components/Inicio';
import { Partida } from './components/Partida';


function App() {

  return (
      
      <Router>
          
            <Switch>
              <Route path="/home" component={Partida}/>
              <Route path="/" component={Inicio}/>
              </Switch>
          
      </Router>
  );
}


export default App;
