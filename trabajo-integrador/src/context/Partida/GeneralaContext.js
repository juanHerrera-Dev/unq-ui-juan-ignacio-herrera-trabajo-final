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
        seleccionarDado: () =>{},
        elegirJugada:(indice) =>{}
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
                return rondaDeJugada.valorJugadaGuardada;
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
    const elegirJugada= indice => {
        let valorJugadaAGuardar = calcularValorJugada(indice);
        let rondaModificada = {...partidaState.rondaActual.ronda,valorJugadaGuardada:valorJugadaAGuardar,JugadaElegida:indice}
        
        let siguienteRondaActual =  {
                ronda:{
                    numeroTirada: 0,
                    tiradaActual: [1,2,3,4,5],
                    valorJugadaGuardada: 0,
                    JugadaElegida: 12
                }
        }
        let dadosSeleccionadosDeRondaSiguiente= [true,true,true,true,true]
        let rondasMasRondaActual = [...partidaState.rondas,rondaModificada]
        let proximasJugadasDisponibles = [...partidaState.JugadasDisponibles]
        proximasJugadasDisponibles[indice] = !partidaState.JugadasDisponibles[indice];
        console.log(indice);
        console.log(proximasJugadasDisponibles);
        setPartidaState({
                        rondas: rondasMasRondaActual,
                        rondaActual: siguienteRondaActual,
                        dadosSeleccionados: dadosSeleccionadosDeRondaSiguiente,
                        JugadasDisponibles: proximasJugadasDisponibles
                    });
        debugger
        console.log(partidaState);
    }

    const queries= {
        getRondas,
        getRondaActual,
        getValorDeJugada
    }
    const actions = {
        tirarDados,
        seleccionarDado,
        elegirJugada  
    }
    //funciones auxiliares
    const nuevaTirada = () =>{
        let tiradaActual =partidaState.rondaActual.ronda.tiradaActual
        let tiradaADevolver= tiradaActual.map((dado, indice) => (
            partidaState.dadosSeleccionados[indice]? rndInt() : dado  
            ));
        
        return tiradaADevolver; 
    }
    const hayDadosATirar = () =>{
        
        return (partidaState.dadosSeleccionados.includes(true));
    }

    const calcularValorJugada= indice =>{
        let valorDeJugada = 0;

        switch(indice) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: 

                (partidaState.rondaActual.ronda.tiradaActual.forEach((dado) => {
                    if(dado==(indice + 1)){
                         valorDeJugada= valorDeJugada + indice + 1 
                    }
                    else{}
                }))

            break;

            default:  
                valorDeJugada = 0;

        }
        console.log(valorDeJugada);
        console.log(partidaState);
        return valorDeJugada
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