import React, { createContext, useState } from 'react'




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
        dadosSeleccionados:[]
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
        dadosSeleccionados: [true,true,true,true,true]

        
    }
    
    const[partidaState, setPartidaState] = useState(initialPartidaState);
    

    console.log(partidaState);

        //queries
        const getRondas = () => {return(partidaState.rondas)}

        const getRondaActual =  () =>{return (partidaState.rondaActual)}

        
        //actions 
        const tirarDados = () =>{
            let partidaStateNuevo = {
                rondas: [],
                rondaActual:{
                    ronda:{
                        numeroTirada: partidaState.rondaActual.ronda.numeroTirada + 1,
                        tiradaActual:[rndInt(),rndInt(),rndInt(),rndInt(),rndInt()],
                        valorJugadaGuarda: 0
                    }
                }
            }
            console.log(partidaState.rondaActual.ronda.numeroTirada + 1);
            setPartidaState(partidaStateNuevo);
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


const rndInt = () => {return(Math.floor(Math.random() * 6) + 1)}
/*
const tiradaNueva = () => {
    const dadosSeleccionados
    let resultadoTirada = []


    return resultadoTirada;
}*/

export {GeneralaProvider,GeneralaContext};