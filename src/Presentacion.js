import React, { useState } from 'react'
//import styled from 'styled-components'

/*const PresentacionStyled = styled.div`
.presentarse{
    width: 450px;     color:chocolate; 
}

/* estilo del saludo
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

`*/

export const Presentacion = () => {

  let[nombres, setNombres] = useState('');
  let ingresoNombre = document.getElementById("ingresoNombre");
  let nombreJugador=  document.getElementById("nombres");

  function setearNombre(){
    if(nombreJugador.value.length === 0 ||nombreJugador.value == null ){
      alert("Campo vacio, favor de ingresar nombre");
  }// else {
    
    //let name = nombreJugador.value;
    //setNombres(name)  ;
     // jugador.innerHTML = nombreJugador.value;
      //inicio.style.display = "block";
      //presentacion.style.display = "none";
 // } 
  }

  ingresoNombre.addEventListener("click", setearNombre);      
  
  return (

    <div>

<div id="presentacionId" className="presentarse">
   
      <label htmlFor="nombre">Ingresar nombre: </label>

      <input type="text" id="nombres" name="nombre" />
      <br /> <br />
      <button className="boton"  id="ingresoNombre"  >Empezar</button>
      <br />   <br />
     
   
</div>

<div className="bienvenida">
        <h3>
          <span>Bienvenido(a)</span>
          <span id="cargaNombre" />
        </h3>
  </div>
  </div>  
)
}
