import { useState } from "react";
import Header from "./components/Header";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";

function App() {
  const [notas, setNotas] = useState([]);
  const [nota, setNota] = useState({});
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex mb-12">
        <Formulario notas={notas} setNotas={setNotas} />
        <Listado notas={notas} setNota={setNota} />
      </div>
    </div>
  );
}

export default App;
