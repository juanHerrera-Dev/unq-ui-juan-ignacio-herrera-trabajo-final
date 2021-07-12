import logoG2 from './generalaLogo2.png';
import './Header.css';

export function HeaderPartida(props) {

    return(
        <header className="container">
                <div className="row p-3 bg-dark">
                  <div className="col-sm-4">
                    <div className="Recuadro-logo">
                      <img src={logoG2} className="Header-logo" alt="logo" />
                    </div>
                  </div>
                  <div className="col-sm-8" >
                    <h1>Jugador 1</h1>
                  </div>
                </div>
        </header>
    );

}