import './TablaTiradas.css';
import { useContext } from 'react';
import { GeneralaContext } from '../../context/Partida/GeneralaContext';
import { Jugada } from './Jugada';

export function TablaTiradas(props) {

    const { state,queries } = useContext(GeneralaContext);
    
    return(
        <aside className=" col-sm-4 col-md-4 col-lg-4 text-justify">
                <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>Jugadas</div>
                    </li>
                    {state.JugadasDisponibles.map((jugada, indice) => (
                        <Jugada estaHabilitada={jugada} indice={indice} key={indice}/>
                    )) }
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>Resultado</div>
                        <span>{queries.getResultado()}</span>
                    </li>
                </ul>
        </aside>
    );

}

        