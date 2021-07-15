import './TablaTiradas.css';

import { useContext } from 'react';
import { GeneralaContext } from '../../context/Partida/GeneralaContext';



export function Jugada({estaHabilitada, indice}) {

    const {state,queries,actions} = useContext(GeneralaContext);
    
    //funciones Auxiliares
    console.log(estaHabilitada)
    const nombreJugada = () => {
        let nombreMatcheado= ""
        switch(indice) {
            case 0:
                nombreMatcheado=1
                
                break;
            case 1:
                nombreMatcheado=2
                break;
            case 2:
                nombreMatcheado=3
                break;
            case 3:
                nombreMatcheado=4
                break;
            case 4:
                nombreMatcheado=5
                break;
            case 5:
                nombreMatcheado=6
                break;
            case 6:
                nombreMatcheado="Escalera"
                break;
            case 7:
                nombreMatcheado="Full"
                break;
            case 8:
                nombreMatcheado="Poker"
                break;
            case 9:
                nombreMatcheado="Generala"
                break;
            default:  
                nombreMatcheado="no deberia pasar";      
        }
        return nombreMatcheado
    }

    return(
        <li className="list-group-item d-flex justify-content-between 1h-sm">
            <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div>{nombreJugada(indice)}</div>
                        </div>
                        <div className="col-3">
                        {console.log(state)}
                            <span>{queries.getValorDeJugada(indice)}</span>
                        </div>
                        <div className="col-4">
                            <button 
                                type="button" 
                                className={
                                    `btn btn-success ${
                                        (estaHabilitada && (state.rondaActual.ronda.numeroTirada!=0))? 
                                        "" : "disabled"}`
                                    }
                                onClick={() => actions.elegirJugada(indice)}
                                >Guardar
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        
    );

}