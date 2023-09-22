import React, { useState } from 'react'
import styled from 'styled-components'
import { Opciones } from './Opciones';

const PresentacionStyled = styled.div`
.presentarse{
    width: 450px;     color:chocolate; 
}

 /*estilo del saludo*/
.bienvenida{
    border: 2px solid rgb(36, 15, 120);
    padding: 2px 10px 2px 10px;
    border-radius: 20px; 
}
.boton{ 
    font-family:'Courier New', Courier, monospace;  
    background-color: burlywood;
    font-weight:bold ;
    font-size: 15px; 
}
`

export const Presentacion = () => {

  let [nombres, setNombres] = useState('');

  function setearNombre() {
    let nombreJugador = document.getElementById("nombres").value;

    if (nombreJugador.length === 0 || nombreJugador == null) {
      alert("Campo vacio, favor de ingresar nombre");
    } else {
      setNombres(nombreJugador);
    }
  }    
  
  return (
      <>
    <PresentacionStyled>
    
    <div id="presentacionId" className="presentarse">

      <label htmlFor="nombre">Ingresar nombre: </label>

      <input type="text" id="nombres"  />
      <br /> <br />
      <button className="boton" id="ingresoNombre" onClick={setearNombre } >Empezar</button>
      <br />   <br />
      
    </div>

<div className="bienvenida">
        <h3>
          <span>Bienvenido(a)</span>
          <span>{nombres}</span>
          {/*<span id="cargaNombre" />*/}
        </h3>
  </div>
  </PresentacionStyled>
     
    <Opciones pres={nombres}/>
</>
)
}

