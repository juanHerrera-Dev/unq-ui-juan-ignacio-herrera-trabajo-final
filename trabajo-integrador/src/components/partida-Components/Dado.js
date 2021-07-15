import { useContext } from 'react';
import { GeneralaContext } from '../../context/Partida/GeneralaContext';
import './Tablero.css';


export function Dado({numero, indice}) {

    const {state,queries,actions} = useContext(GeneralaContext);

    console.log("dado de indice:", indice," con valor:", state.dadosSeleccionados[indice]);
    const claseDeSeleccion = state.dadosSeleccionados[indice] ? "seleccionado" : "no_seleccionado"
    
    
    //estaSeleccionado(indice)

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