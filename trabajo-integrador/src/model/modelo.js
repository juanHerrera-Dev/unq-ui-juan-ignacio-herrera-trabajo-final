
const Partida = {
    state:{
        rondas : [],
        rondaActual : {
            ronda:{
                numeroRonda: 1,
                tirada: []
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
};

/*
funcionalidades a implementar:

    1) jugar un turno {
        a) empieza con RondaActual = {
            ronda:{
                numeroRonda: 1,  /// ese nmrRonda seria en el primer turno
                tiradaActual:[1,2,3,4,5],
                
            }
        }
    }
*/