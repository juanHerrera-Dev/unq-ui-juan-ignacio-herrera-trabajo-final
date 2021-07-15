import './TablaTiradas.css';

import { useContext } from 'react';
import { GeneralaContext } from '../../context/Partida/GeneralaContext';



export function Jugada({estaHabilitada, indice}) {

    const {state,queries,actions} = useContext(GeneralaContext);
    /*
    console.log("dado de indice:", indice," con valor:", state.dadosSeleccionados[indice]);
    const claseDeSeleccion = state.dadosSeleccionados[indice] ? "seleccionado" : "no_seleccionado"
    */
    
    //estaSeleccionado(indice)
    //funciones Auxiliares

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
            <div>{nombreJugada(indice)}</div>
            <span>3</span>
            <button type="button" className={`btn btn-success ${estaHabilitada? "" : "disabled"}`} >Guardar</button>
        </li>
        
    );

}