import { useState } from 'react'
import Header from './components/Header'
import Listado from './components/Listado'
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario/>
        <Listado/>
      </div>

    </div>
  )
}

export default App
