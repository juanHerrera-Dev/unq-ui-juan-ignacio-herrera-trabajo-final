import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Inicio } from './components/Inicio';
import { Partida } from './components/Partida';
import { GeneralaProvider } from './context/Partida/GeneralaContext';


function App() {

  return (
      
      <Router>
          <GeneralaProvider>
            <Switch>
              <Route path="/home" component={Partida}/>
              <Route path="/" component={Inicio}/>
            </Switch>
          </GeneralaProvider>
      </Router>
  );
}


export default App;
