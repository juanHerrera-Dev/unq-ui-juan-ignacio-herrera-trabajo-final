import './Partida.css';

import { TablaTiradas } from './partida-Components/TablaTiradas';
import { Tablero } from './partida-Components/Tablero';
import { HeaderPartida } from './partida-Components/HeaderPartida';

export function Partida(props) {
    
    return(
      <div className="PartidaBackground">
        <div className="PartidaStyle">
            <HeaderPartida/>
            <div className="container my-3">
                <section className="row">
                  <Tablero/>
                  <TablaTiradas/>
                </section>
            </div>
            <footer>
              <div class="container">
                <h5>Footer....</h5>
              </div>
            </footer>
          </div>
      </div>
      
    );

}