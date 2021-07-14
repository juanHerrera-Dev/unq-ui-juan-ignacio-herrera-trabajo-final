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
        }
    },
    queries:{
        getRondas : () =>{},
        getRondaActual :  () =>{}
    },
    actions:{
        tirarDados : () => {}
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
        }
        
    }
    
    const[partidaState, setPartidaState] = useState(initialPartidaState);
    
    //const [partidaRondaActual,setRondaActual]= useState(partidaState.rondaActual);
    

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
    const queries= {
        getRondas,
        getRondaActual,
    }
    const actions = {
        tirarDados    
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

export {GeneralaProvider,GeneralaContext};