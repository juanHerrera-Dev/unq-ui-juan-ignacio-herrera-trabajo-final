import './Tablero.css';


export function Dado(props) {

    return(
        <div className={`dado dado_numero_${props.numero}`} data-idx={props.numero} id=""/>
    );

}