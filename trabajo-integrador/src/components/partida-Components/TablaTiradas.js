import './TablaTiradas.css';

export function TablaTiradas(props) {

    return(
        <aside className=" col-sm-4 col-md-3 col-lg-3 text-justify">
                <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>Jugadas</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>1</div>
                        <span>3</span>
                        <button type="button" className="btn btn-success disabled" >Guardar</button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>2</div>
                        <span>4</span>
                        <button type="button" className="btn btn-success disabled">Guardar</button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>3</div>
                        <span>0</span>
                        <button type="button" className="btn btn-success">Guardar</button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>4</div>
                        <span>4</span>
                        <button type="button" className="btn btn-success disabled">Guardar</button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>5</div>
                        <span>15</span>
                        <button type="button" className="btn btn-success disabled">Guardar</button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>6</div>
                        <span>18</span>
                        <button type="button" className="btn btn-success disabled">Guardar</button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>Escalera</div>
                        <span>25</span>
                        <button type="button" className="btn btn-success disabled">Guardar</button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>Full</div>
                        <span>30</span>
                        <button type="button" className="btn btn-success disabled">Guardar</button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>Poker</div>
                        <span>40</span>
                        <button type="button" className="btn btn-success disabled">Guardar</button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>Generala</div>
                        <span>0</span>
                        <button type="button" className="btn btn-success disabled">Guardar</button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between 1h-sm">
                        <div>Resultado</div>
                        <span>120</span>
                    </li>
                </ul>
        </aside>
    );

}

        