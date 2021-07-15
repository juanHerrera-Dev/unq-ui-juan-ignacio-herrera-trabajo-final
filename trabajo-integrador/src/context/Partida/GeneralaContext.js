import React, { createContext, useContext, useState } from 'react'




const GeneralaContext = createContext({
    state:{
        rondas : [],
        rondaActual : {
            ronda:{
                numeroTirada: 0,
                tiradaActual: [1,2,3,4,5],
                valorJugadaGuardada: 0,
                JugadaElegida: 12 //elegi el 12 porque solo van del 0 al 9 las jugadas validas.
            }
        },
        dadosSeleccionados:[],
        JugadasDisponibles:[]
    },
    queries:{
        getRondas : () =>{},
        getRondaActual :  () =>{},
        getValorDeJugada: (indice) => {},
        
    },
    actions:{
        tirarDados : () => {},
        seleccionarDado: () =>{}
    }
});



const GeneralaProvider = ({children}) => {
    const initialPartidaState = {
        rondas : [],
        rondaActual : {
            ronda:{
                numeroTirada: 0,
                tiradaActual: [1,2,3,4,5],
                valorJugadaGuardada: 0,
                JugadaElegida: 12
            }
        },
        dadosSeleccionados: [true,true,true,true,true],
        JugadasDisponibles:[true,true,true,true,true,true,true,true,true,true]
        
    }
    
    const[partidaState, setPartidaState] = useState(initialPartidaState);
    
    //queries
    const getRondas = () => {return(partidaState.rondas)}

    const getRondaActual =  () =>{return (partidaState.rondaActual)}

    const getValorDeJugada = (indice) => {
        if(partidaState.JugadasDisponibles[indice]){
            return 0;
        }
        else{
            let rondaDeJugada =partidaState.rondas.find(ronda => (ronda.JugadaElegida == indice))
                return rondaDeJugada.valorJugadaGuarda;
        }
    }

        
    //actions 
    const tirarDados = () =>{
        if(hayDadosATirar()){
            let rondaActualModificada = {...partidaState.rondaActual}
            let numeroDeTiradaModificado = 
                rondaActualModificada.ronda.numeroTirada + 1

            let rondaModificada= {
                ...rondaActualModificada.ronda,
                numeroTirada:numeroDeTiradaModificado,
                tiradaActual: nuevaTirada()
                }
            rondaActualModificada = {ronda: rondaModificada}
            let partidaStateNuevo = {...partidaState, rondaActual: rondaActualModificada}
            console.log(partidaState.rondaActual.ronda.numeroTirada + 1);
            setPartidaState(partidaStateNuevo);
        }
        else{}
        //console.log(partidaState);
    }
    const seleccionarDado = indice =>{
        if(partidaState.rondaActual.ronda.numeroTirada != 0){ 
            const nuevosDados = [...partidaState.dadosSeleccionados]
            nuevosDados[indice] = !partidaState.dadosSeleccionados[indice]
            setPartidaState({...partidaState,dadosSeleccionados:nuevosDados});
        }
        else{}
    }

    const queries= {
        getRondas,
        getRondaActual,
        getValorDeJugada
    }
    const actions = {
        tirarDados,
        seleccionarDado   
    }
    //funciones auxiliares
    const nuevaTirada = () =>{
        let tiradaActual =partidaState.rondaActual.ronda.tiradaActual
        let tiradaADevolver= tiradaActual.map((dado, indice) => (
            partidaState.dadosSeleccionados[indice]? rndInt() : dado  
            ));
        console.log(tiradaADevolver);
        return tiradaADevolver; 
    }
    const hayDadosATirar = () =>{
        
        return (partidaState.dadosSeleccionados.includes(true));
    }

    return(
        <GeneralaContext.Provider value={{
            state: partidaState,
            queries: queries,
            actions:actions
        }}>
            {children}
        </GeneralaContext.Provider>
    )

}

//funciones auxiliares
const rndInt = () => {return(Math.floor(Math.random() * 6) + 1)}

export {GeneralaProvider,GeneralaContext};