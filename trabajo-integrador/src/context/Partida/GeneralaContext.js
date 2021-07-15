import React, { createContext, useContext, useState } from 'react'




const GeneralaContext = createContext({
    state:{
        rondas : [],
        rondaActual : {
            ronda:{
                numeroTirada: 0,
                tiradaActual: [1,2,3,4,5],
                valorJugadaGuarda: 0
            }
        },
        dadosSeleccionados:[],
        JugadasDisponibles:[]
    },
    queries:{
        getRondas : () =>{},
        getRondaActual :  () =>{},
        
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
                valorJugadaGuarda: 0
            }
        },
        dadosSeleccionados: [true,true,true,true,true],
        JugadasDisponibles:[true,true,true,true,true,true,true,true,true,true]
        
    }
    
    const[partidaState, setPartidaState] = useState(initialPartidaState);
    
    //queries
    const getRondas = () => {return(partidaState.rondas)}

    const getRondaActual =  () =>{return (partidaState.rondaActual)}

        
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
            
        const nuevosDados = [...partidaState.dadosSeleccionados]
        nuevosDados[indice] = !partidaState.dadosSeleccionados[indice]
        setPartidaState({...partidaState,dadosSeleccionados:nuevosDados});
        }

    const queries= {
        getRondas,
        getRondaActual,
        
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