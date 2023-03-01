import { useEffect, useState } from "react";

const Formulario = ( {notas, setNotas, nota, setNota} ) => {
  const [nombreNota, setnombreNota] = useState("");
  const [fecha, setFecha] = useState("");
  const [contenido, setContenido] = useState("");

  const [error, setError] = useState(false);

  useEffect(
    () => {
      if (Object.keys(nota).length > 0) {
        setnombreNota(nota.nombreNota)
        setFecha(nota.fecha)
        setContenido(nota.contenido)
      }
    },[nota]
  )

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([nombreNota, fecha, contenido].includes('')) {
      setError(true);
    }else{
      setError(false);
    }
    
    const objetoNota = {
      nombreNota,
      fecha,
      contenido
    }

    if (nota.id) {
      objetoNota.id = nota.id
      const notasActualizadas = notas.map( notaState => notaState.id === nota.id ? objetoNota : notaState)

      setNotas(notasActualizadas)
      setNota({})
    }else{
      objetoNota.id = generarId()
      setNotas([...notas, objetoNota])

    }

    //reiniciar formulario
    setnombreNota('')
    setFecha('')
    setContenido('')

  }
  return (
    <div className="w-1/2 lg:w-2/5 mx-5">
      <h2 className=" font-black text-3xl mb-5">Notas</h2>
      <p className="mb-10">
        Añade notas y{" "}
        <span className="text-indigo-600 font-bold">Administralas</span>
      </p>
      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-md px-10 py-10">
        {error && <div className="bg-red-700 font-bold p-2 mb-5 text-white rounded-md text-center">
          <p>
            Todos los campos son obligatorios
          </p>
          </div>}
        <div className="mb-5">
          <label
            htmlFor="nombreNota"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Nota
          </label>
          <input
            type="text"
            id="nombreNota"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Escriba aqui el nombre de su nota"
            value={nombreNota}
            onChange={(e) => setnombreNota(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 font-bold uppercase"
          >
            Fecha
          </label>
          <input
            type="date"
            id="fecha"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="nota"
            className="block text-gray-700 font-bold uppercase"
          >
            Nota
          </label>
          <textarea
            name="nota"
            id="nota"
            cols="30"
            rows="10"
            className="border-2 w-full p-2 rounded-md mt-2"
            placeholder="Escriba aqui su nota"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-colors"
          value={ nota.id ? "Editar nota" : "Agregar nota"}
        />
      </form>
    </div>
  );
};

export default Formulario;
