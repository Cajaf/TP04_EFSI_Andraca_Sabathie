import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AdministradorCitas from './Components/AdministradorCitas'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container"></div>
          <div className="row">
          <Form/>
          <AdministradorCitas/>
        <script src="/static/js/bundle.js"></script>
        <script src="/static/js/vendors~main.chunk.js"></script>
        <script src="/static/js/main.chunk.js"></script>
      </div>
    </div>
  )
}

export default App
