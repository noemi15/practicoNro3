import React from 'react'
import styled from 'styled-components'
import imagenPiedra from './imagen/piedra.png'
import imagenPapel from './imagen/papel.png'
import imagenTijera from './imagen/tijera.png'

const OpcionesStyled = styled.div`


/* estilo para seleccionar piedra papel tijera */
.opcion{
    width: 100px;
    height: 90px;
    border-radius: 50%;
    margin: 10px;
    cursor:pointer
}

/* animacion al darle click  */
.opcion:active {
    background-color: rgb(84, 70, 140);
    transform: scale(0.5);
  }

/* ocultar inicio 
#inicioId{
    display: none;
}*/

`
{/*const btnPiedra = document.getElementById("piedra")
const btnPapel = document.getElementById("papel")
const btnTijera = document.getElementById("tijera")
const nombreJugador = document.getElementById("nombre")
const msjJugada = document.getElementById("msj-jugada")
const msjJugadaFinal = document.getElementById("msj-jugada-final")
const eleccionJugador = document.getElementById("eleccion-jugador")
const eleccionPC = document.getElementById("eleccion-pc")
const contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
const contenedorPuntosPC = document.querySelector("#puntos-computadora");
const opcionesJuego = document.querySelector("#opciones");
const marcador = document.getElementById("marcadorId");
const inicio = document.getElementById("inicioId");
const presentacion = document.getElementById("presentacionId");
const reload = document.getElementById("reiniciar");

let opcionJugador;
let opcionPc;
let cantJuegosGanadosJugador = 0;
let cantJuegosGanadosPc = 0;
let conteoJugada = 0; */}

export const Opciones = () => {
    return (
        <OpcionesStyled>

<div id="inicioId">
      
      <h3>Elige una opción:</h3>
      <div className="opciones">
        <input
          id="piedra"
          className="opcion"
          type="image"
          src={imagenPiedra}
          alt="piedra"
          width={110}
          height={120}
        />
        <input
          id="papel"
          className="opcion"
          type="image"
          src={imagenPapel}
          alt="papel"
          width={110}
          height={120}
        />
        <input
          id="tijera"
          className="opcion"
          type="image"
          src={imagenTijera}
          alt="tijera"
          width={110}
          height={120}
        />
      </div>
    </div>

       {/* btnPiedra.addEventListener('click', function(){
            opcionJugador = "Piedra";
            opPc();
        });
        
    btnPapel.addEventListener('click', function(){
            opcionJugador = "Papel";
            opPc();
        });
    
    btnTijera.addEventListener('click', function(){
            opcionJugador = "Tijera";
            opPc();
        })
    
    // eleccion de PC y conteo jugada
    function opPc(){
            let aleaorio = nAleatorio();
        
            if(aleaorio == 0){
                opcionPc = "Piedra";
            }else if(aleaorio == 1){
                opcionPc = "Papel";
            }else if(aleaorio == 2){
                opcionPc = "Tijera";
            }  
            
            if(conteoJugada < 6){
                jugada();
                eleccionJugador.innerHTML = opcionJugador;
                eleccionPC.innerHTML = opcionPc;
                combate();
                jugadaFinal();
            }
        }
    
    )
  }



// eleccion aleatoria
function nAleatorio(){
        let n = Math.floor(Math.random() * 3);
        return n;
        }


// generar reinicio
reload.addEventListener("click", _ => {
    location.reload();
});

*/}

</OpcionesStyled>
    )
}


