import React from 'react'
import styled from 'styled-components'

const JugadaStyled = styled.div`
/* estilo al marcador de puntajes  */
.marcador {
    padding: 7px 40px 7px 40px;
    border-radius: 20px;
    font-weight: 600;
    border: 2px solid rgb(36, 15, 120);
    font-size: 20px;       
}

/* ocultar marcador   
#marcadorId {
    display: none;
}  */
`

export const Jugada = () => {
  return (
  
    <JugadaStyled>

<div id="marcadorId" className="marcador">
      <p>
        <span id="jugador" />
        <span className="diff"> VS </span>
        <span id="pc">PC</span>
      </p>
      <p>
        <span id="puntos-usuario">0</span>
        <span id="combate" className="diff">
          {" "}
        </span>
        <span id="puntos-computadora">0</span>
      </p>
      <p>
        <span id="eleccion-jugador" />
        <span></span>
        <span id="eleccion-pc" />
      </p>
      <p className="diff" id="msj-jugada">
        {" "}
      </p>
    </div>

     {/* proclamar ganador y reiniciar */}
     <div className="mensaje-final" style={{ height: 200 }}>
      <h3 className="diff final" id="msj-jugada-final">
        {" "}
      </h3>
    </div>
    <br />
    <br />
    <button className="boton" id="reiniciar">
      Reiniciar juego
    </button>
  
     
     {/*} function jugada() {
          if (opcionJugador == "Piedra" && opcionPc == "Tijera" ||
              opcionJugador == "Papel" && opcionPc == "Piedra" ||
              opcionJugador == "Tijera" && opcionPc == "Papel"){
                  msjJugada.innerHTML = "Ganó Jugador!";                
                  cantJuegosGanadosJugador++;
                  conteoJugada++;
                  contenedorPuntosUsuario.innerText = cantJuegosGanadosJugador;
          }else if (opcionPc == "Piedra" && opcionJugador == "Tijera" ||
                      opcionPc == "Papel" && opcionJugador == "Piedra" ||
                      opcionPc == "Tijera" && opcionJugador == "Papel"){
                  msjJugada.innerHTML = "Ganó PC!";
                  cantJuegosGanadosPc++;
                  conteoJugada++;
                  contenedorPuntosPC.innerText = cantJuegosGanadosPc;
          }else{
                  msjJugada.innerHTML = "Empate"; 
                  conteoJugada++;
                  cantJuegosGanadosJugador++;
                  cantJuegosGanadosPc++;
                  contenedorPuntosUsuario.innerText = cantJuegosGanadosJugador;
                  contenedorPuntosPC.innerText = cantJuegosGanadosPc;
          }         
          marcador.style.display = "block";
      }

      // agrega imagen en funcion a las elecciones de la jugada
function combate() {
    if(opcionJugador == "Papel" && opcionPc == "Piedra" || opcionPc == "Papel" && opcionJugador == "Piedra"){
        document.getElementById("combate").innerHTML =  '<img src="papel envuelve piedra.png">';
    }else if(opcionJugador == "Piedra" && opcionPc == "Tijera" ||opcionPc == "Piedra" && opcionJugador == "Tijera" ){
        document.getElementById("combate").innerHTML =  '<img src="piedra golpea tijera.png">';
    }else if(opcionJugador == "Tijera" && opcionPc == "Papel" ||  opcionPc == "Tijera" && opcionJugador == "Papel"){
        document.getElementById("combate").innerHTML =  '<img src="tijera corta papel.png">';
    } else{
        document.getElementById("combate").innerHTML =  '<img src="empate.png">';
    }
}

// determinar al ganador de 3 juegos
function jugadaFinal(){
    if (cantJuegosGanadosJugador == 3 || cantJuegosGanadosPc == 3) {
        if (cantJuegosGanadosJugador == 3) {
            msjJugadaFinal.innerHTML = "🔥 ¡GANASTE EL JUEGO! 🔥";
        } else if (cantJuegosGanadosPc == 3) {
            msjJugadaFinal.innerHTML = "😭 ¡GANÓ LA PC!";
        }
        inicio.style.display = "none";   
        reload.style.display = "block";
    } 
 } */}

    </JugadaStyled>
  )
}


