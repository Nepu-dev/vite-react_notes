import { useEffect, useState } from "react";
import Header from "./components/Header";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";

function App() {
  const [notas, setNotas] = useState([]);
  const [nota, setNota] = useState({});

  const eliminarNota = (id) => {
    const notasActualizadas = notas.filter( nota => nota.id !== id);
    setNotas(notasActualizadas)
  }

  useEffect(
    () => {
      const obtenerLS = () => {
        const notasLS = JSON.parse(localStorage.getItem('notas')) ?? [];
        setNotas(notasLS)
      }
      obtenerLS();
    }, []
  );

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify( notas ));
  }, [notas])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex mb-12">
        <Formulario notas={notas} setNotas={setNotas} nota={nota} setNota={setNota}/>
        <Listado notas={notas} setNota={setNota} eliminarNota={eliminarNota}/>
      </div>
    </div>
  );
}

export default App;
