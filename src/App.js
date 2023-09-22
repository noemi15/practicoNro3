import './App.css';
import styled from 'styled-components';
import {Presentacion}  from './Presentacion';

//import { Jugada } from './Jugada';


const AppStyled = styled.main`
body{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color:beige;
    color:chocolate;
    margin: 0;
}

/* Genera alineacion en el contexto */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
`
/* estructura de la pagina */
function App() {
  return (
    <AppStyled>
    
    <div className="App">

    {/* titulo a la pagina*/}
    <h1>PIEDRA - PAPEL - TIJERA</h1>
    
      <div className="container">

      {/* pedido de datos  */}
    <Presentacion> </Presentacion>

      </div> 

    </div>
  
    </AppStyled>

  )
}

export default App;