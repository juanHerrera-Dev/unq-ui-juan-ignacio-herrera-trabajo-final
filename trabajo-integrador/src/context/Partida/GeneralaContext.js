import React, { createContext, useState } from 'react'




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
        getResultado: () => {}
    },
    actions:{
        tirarDados : () => {},
        seleccionarDado: () =>{},
        elegirJugada:(indice) =>{},
        reiniciarPartida:() =>{}
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
            
            let rondaDeJugada =partidaState.rondas.find(ronda => (ronda.JugadaElegida === indice))
                return rondaDeJugada.valorJugadaGuardada;
        }
    }
    const getResultado = () => {
        let resultadoActual = 0
        
        if(partidaState.rondas.length !== 0){
            partidaState.rondas.forEach((ronda) => {
                resultadoActual = resultadoActual + ronda.valorJugadaGuardada
            });
        return resultadoActual;
        }
        else{
            return resultadoActual;
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
        if(partidaState.rondaActual.ronda.numeroTirada !== 0){ 
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
        
        setPartidaState({
                        rondas: rondasMasRondaActual,
                        rondaActual: siguienteRondaActual,
                        dadosSeleccionados: dadosSeleccionadosDeRondaSiguiente,
                        JugadasDisponibles: proximasJugadasDisponibles
                    });
        
    }
    const reiniciarPartida= () =>{
        setPartidaState(initialPartidaState);
    }

    const queries= {
        getRondas,
        getRondaActual,
        getValorDeJugada,
        getResultado
    }
    const actions = {
        tirarDados,
        seleccionarDado,
        elegirJugada,
        reiniciarPartida
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
                    if(dado === (indice + 1)){
                         valorDeJugada = valorDeJugada + indice + 1 
                    }
                    else{}
                }))

            break;
            case 6:
                let tiradaEscalera =partidaState.rondaActual.ronda.tiradaActual.sort().toString();

                if(tiradaEscalera === "1,2,3,4,5" || tiradaEscalera === "2,3,4,5,6"){
                    valorDeJugada = 20;
                }
                else {}
            break;    
            case 7:
                let tiradaFull=partidaState.rondaActual.ronda.tiradaActual.sort();
                
                const d1 = tiradaFull[0];
                const d2 = tiradaFull[1];
                const d3 = tiradaFull[2];
                const d4 = tiradaFull[3];
                const d5 = tiradaFull[4];
                    //ej 222 33
                if(d1 === d2 && d2 === d3 && d3 !== d4 && d4 === d5){
                    valorDeJugada=30;
                }
                //ej 22 333
                else if(d1 === d2 && d2 !== d3 && d3 === d4 && d4 === d5){
                    valorDeJugada=30;
                }
                else {}
                break;
            case 8:
                let tiradaPoker=partidaState.rondaActual.ronda.tiradaActual.sort();
                
                const dado1 = tiradaPoker[0];
                const dado2 = tiradaPoker[1];
                const dado3 = tiradaPoker[2];
                const dado4 = tiradaPoker[3];
                const dado5 = tiradaPoker[4];

                if(dado1 === dado2 && dado2 === dado3 && dado3 === dado4){
                    valorDeJugada=40;
                }
                else if(dado2 === dado3 && dado3 === dado4 && dado4 === dado5){
                    valorDeJugada=40;
                }
                else {}
            break; 
            case 9:
                let tiradaGenerala=partidaState.rondaActual.ronda.tiradaActual
                let dadoAComparar= tiradaGenerala[0]
                
                tiradaGenerala.every(dado => (dado === dadoAComparar))? valorDeJugada=60 : valorDeJugada= 0
                break;
            default:  
                valorDeJugada = 0;

        }
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