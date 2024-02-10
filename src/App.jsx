import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Capa from './Capa';
import Navegacao from './Navegacao';
import ContainerCards from './ContainerCards';
import CardCondimentos from './CardCondimentos';

function App() {

  const [pagAtual, setPagAtual] = useState('xis')
  const handleInputChange = (event) => {
    setPagAtual(event.target.value)
  }

  return (
    <div className='container'>

      <Capa />
      <CardCondimentos />
      <Navegacao onChange={handleInputChange} />
      <ContainerCards pagAtual={pagAtual}/>

    </div>
  )
}

export default App
