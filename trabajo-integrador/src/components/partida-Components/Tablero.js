import './Tablero.css';
import { useContext, useEffect , useState } from 'react';
import { GeneralaContext } from '../../context/Partida/GeneralaContext';
import { Dado } from './Dado';

export function Tablero(props) {

    const { state,actions,queries } = useContext(GeneralaContext);
    const [dados,setDados] = useState(state.rondaActual.ronda.tiradaActual);
    
    useEffect(() => {
        setDados(queries.getRondaActual().ronda.tiradaActual);
    },[queries])
    
    const handleClick = () => {
        
        actions.tirarDados();
        
    }
    return(
        <article className="col-xs-12 col-sm-8 col-md-9 col-lg-9">
                    <div className="tablero" >
                        <div className="Tablero-parte1">
                            <h3>Generala : Jugador 1</h3>
                            <div className="caja">
                                <div id="dados">
                                    <div className="dados-js">
                                        {dados.map(e => (
                                            <Dado numero={e}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Tablero-parte2">
                            <span className="align-bottom">
                                <button type="button" className="btn btn-danger btn-lg" onClick={handleClick}>Tirar Dados</button>
                            </span>
                        </div>
                    </div>
        </article>
    );

}

