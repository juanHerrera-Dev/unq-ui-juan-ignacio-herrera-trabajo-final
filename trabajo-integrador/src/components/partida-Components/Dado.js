import { useContext } from 'react';
import { GeneralaContext } from '../../context/Partida/GeneralaContext';
import './Tablero.css';


export function Dado({numero, indice}) {

    const {state,queries,actions} = useContext(GeneralaContext);

    const claseDeSeleccion = state.dadosSeleccionados[indice] ? "seleccionado" : "no_seleccionado"
    
    return(
        <div 
             className={`dado dado_numero_${numero} ${claseDeSeleccion}`}  
             data-idx={numero} 
             id="" 
             key={indice} 
             onClick={() => actions.seleccionarDado(indice)} 
        />
    );

}