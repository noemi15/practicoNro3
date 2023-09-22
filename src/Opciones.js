import React, { useState} from 'react'
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
/*Dar opciones del juego y mostrar el marcador */
export const Opciones = (props) => {

  let [opcionJugador,setOpcionJugador ]=useState(''); 
  let [cantJuegosGanadosJugador,setCantJuegosGanadosJugador ]=useState(0); 
  let [cantJuegosGanadosPc,setCantJuegosGanadosPc ]=useState(0); 
  let [opcionPc,setOpcionPc]=useState('');
  let [ganadorFinal,setGanadorFinal ]=useState(''); 
  let [ganador,setGanador ]=useState(''); 
  let [conteoJugada, setConteoJugada] = useState(0);

   // eleccion aleatoria
function nAleatorio(){
  let n = Math.floor(Math.random() * 3);
  return n;
  }
  
  function jugada() {
    
      if ((opcionJugador === "Piedra" && opcionPc === "Tijera") ||
          (opcionJugador === "Papel" && opcionPc === "Piedra") ||
          (opcionJugador === "Tijera" && opcionPc === "Papel")){
              ganador = "Ganó Jugador!";                
              cantJuegosGanadosJugador++;
              conteoJugada++;
      }else if ((opcionPc === "Piedra" && opcionJugador === "Tijera") ||
                ( opcionPc === "Papel" && opcionJugador === "Piedra") ||
                  (opcionPc === "Tijera" && opcionJugador === "Papel")){
              ganador = "Ganó PC!";
              cantJuegosGanadosPc++;
              conteoJugada++;
      }else{
              ganador = "Empate"; 
              conteoJugada++;
              cantJuegosGanadosJugador++;
              cantJuegosGanadosPc++;
      }   
      setOpcionJugador(opcionJugador);
      setOpcionPc(opcionPc);
      setGanador(ganador);
      setCantJuegosGanadosJugador(cantJuegosGanadosJugador);
      setCantJuegosGanadosPc(cantJuegosGanadosPc); 
      setConteoJugada(conteoJugada);
  }

// determinar al ganador de 3 juegos
function jugadaFinal(){
    if (cantJuegosGanadosJugador === 3 || cantJuegosGanadosPc === 3) {
        if (cantJuegosGanadosJugador === 3) {
          ganadorFinal = "🔥 ¡GANASTE EL JUEGO! 🔥";
          setGanadorFinal(ganadorFinal);
        } else if (cantJuegosGanadosPc === 3) {
          ganadorFinal = "😭 ¡GANÓ LA PC!";
          setGanadorFinal(ganadorFinal);
        }
        
    } 
 } 

// eleccion de PC y conteo jugada
function opPc(){
  let aleaorio = nAleatorio();
        if(aleaorio === 0){
           opcionPc = "Piedra";
        }else if(aleaorio === 1){
            opcionPc = "Papel";
        }else if(aleaorio === 2){
            opcionPc = "Tijera";
        }  
        if(conteoJugada < 6){
          jugada();
          jugadaFinal();
        } 
  }

    return (
      <>
    <OpcionesStyled>
        <div id="inicioId">
      
      <h3>Elige una opción:</h3>
      <div className="opciones">

        <input          
          className="opcion"
          type="image"
          src={imagenPiedra}
          alt="piedra"
          width={110}
          height={120}
          onClick={() =>{opcionJugador="Piedra";
                         opPc()}}
        />
        <input
          className="opcion"
          type="image"
          src={imagenPapel}
          alt="papel"
          width={110}
          height={120}
          onClick={() =>{opcionJugador="Papel";
                         opPc()}}
        />
        <input
          className="opcion"
          type="image"
          src={imagenTijera}
          alt="tijera"
          width={110}
          height={120}
          onClick={() =>{opcionJugador="Tijera";
                          opPc()}}
        />
        
      </div>
      
      <div id="marcadorId" className="marcador">
      <p>
          <span>{props.pres}</span>
          <span className="diff"> VS </span>
          <span id="pc">PC</span>
      </p>
      <p>
        <span>{cantJuegosGanadosJugador}</span>
        <span  className="diff">    {" "}     </span>
        <span >{cantJuegosGanadosPc}</span>
      </p>
  
      <p>
        <span  >{opcionJugador}</span>
        <span></span>
        <span>{opcionPc}</span>
      </p>
      <p className="diff">  {ganador}       </p>
    </div>

     {/* proclamar ganador y reiniciar */}
     <div className="mensaje-final" style={{ height: 200 }}>
      <h3 className="diff final" >  {ganadorFinal} </h3>
    </div>
    <br />    <br />
    <button className="boton" onClick={() =>window.location.reload()}> Reiniciar juego   </button>
     <br/><br/>

    </div>

</OpcionesStyled>

</>
    )
}