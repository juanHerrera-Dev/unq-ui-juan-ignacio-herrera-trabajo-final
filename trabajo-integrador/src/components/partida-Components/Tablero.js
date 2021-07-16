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
    
    const claseNoHabilitado = (state.rondaActual.ronda.numeroTirada === 3) ? "disabled" : "" 
    const handleClick = () => {
        
        actions.tirarDados();
        
    }
    return(
        <article className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                    <div className="tablero" >
                        <div className="Tablero-parte1">
                            <h3>Generala : Jugador 1</h3>
                            <div className="caja">
                                <div id="dados">
                                    <div className="dados-js">
                                        {dados.map((e, indice) => (
                                            <Dado numero={e} indice={indice} key={indice}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Tablero-parte2">
                            {state.rondas.length === 10?<div className="my-3">
                                                            <p>Partida Finalizada,para volver a jugar toque el boton</p>
                                                            <div className="my-3">
                                                                <button type="button" className="btn btn-danger btn-lg" onClick={() => actions.reiniciarPartida()}>
                                                                    Volver a jugar
                                                                </button>
                                                            </div>
                                                        </div> : ""}

                            <span className="align-bottom">
                                <button type="button" className={`btn btn-danger btn-lg ${claseNoHabilitado}`} onClick={handleClick}>Tirar Dados</button>
                               
                            </span>
                        </div>
                    </div>
        </article>
    );

}

