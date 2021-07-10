import logoG from './generalaLogo.png';
import './Inicio.css';
import { useHistory , Link } from 'react-router-dom';

export function Inicio(props) {

    const history = useHistory();

    const handleClick = (event) => {
      event.preventDefault();
      history.push('/home');
    };

    return(
      <div >
        <header className="App-header">
          <div>
            <img src={logoG} className="App-logo" alt="logo" />
          </div>
          <div className="mx-auto">
            <button type="button" className="m-5  btn btn-success" onClick={handleClick}>Jugar</button>
          </div>
        </header>
      </div>
      
    );

}