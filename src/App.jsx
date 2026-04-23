import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AdministradorCitas from './Components/AdministradorCitas'
import Form from './Components/Form'

function App() {
  const [citas, setcitas] = useState([])

  return (
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container"></div>
          <div className="row">
          <Form citas = {citas} setCitas = {setcitas}/>
          <AdministradorCitas citas = {citas} setCitas = {setcitas}/>
      </div>
    </div>
  );
}

export default App
