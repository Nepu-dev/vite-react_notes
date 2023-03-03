const Nota = ({nota, setNota, eliminarNota}) => {
  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar esta nota?')
    if (respuesta) {
      eliminarNota(nota.id)
    }
  }
  return (
    <div>
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <h3 className=" font-bold mb-3 text-gray-700 uppercase">
          Nombre nota: {""}{" "}
          <span className="font-normal normal-case">{nota.nombreNota}</span>
        </h3>
        <h4 className=" font-bold mb-3 text-gray-700 uppercase">
          Fecha: {""} <span className="font-normal normal-case">{nota.fecha}</span>
        </h4>
        <p className=" font-bold mb-3 text-gray-700 uppercase">
          Contenido: {""}{" "}
          <span className="font-normal normal-case">{nota.contenido}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button 
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setNota(nota)}
          >Editar</button>
          <button 
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
          >Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default Nota;
