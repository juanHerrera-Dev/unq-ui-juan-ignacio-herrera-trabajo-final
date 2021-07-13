import './Partida.css';

import { TablaTiradas } from './partida-Components/TablaTiradas';
import { Tablero } from './partida-Components/Tablero';
import { HeaderPartida } from './partida-Components/HeaderPartida';

export function Partida(props) {
    
    return(
      <div className="PartidaBackground">
          <div className="container">
            <div className="PartidaStyle">
                <HeaderPartida/>
                <div className="container my-3">
                    <section className="row">
                      <Tablero/>
                      <TablaTiradas/>
                    </section>
                </div>
            </div>
          </div>
      </div>
      
    );

}