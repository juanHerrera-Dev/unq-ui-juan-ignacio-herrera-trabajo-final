import './Tablero.css';

export function Tablero(props) {

    return(
        <article className="col-xs-12 col-sm-8 col-md-9 col-lg-9">
                    <div className="tablero" >
                        <div className="Tablero-parte1">
                            <h3>Generala : Jugador 1</h3>
                            <div className="caja">
                                <div id="dados">
                                    <div className="dados-js">
                                        {[1,2,3,4,5].map(e => (
                                            <div className={`dado dado_numero_${e}`} data-idx={e} id=""/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Tablero-parte2">
                            <span className="align-bottom">
                                <button type="button" className="btn btn-danger btn-lg">Tirar Dados</button>
                            </span>
                        </div>
                    </div>
        </article>
    );

}