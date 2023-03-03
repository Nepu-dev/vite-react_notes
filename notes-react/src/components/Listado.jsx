import Nota from "./Nota";
const Listado = ({ notas, setNota, eliminarNota }) => {
  return (
    <div className="w-1/2 lg:w-3/5">
      {notas && notas.length ? (
        <>
          <h2 className="font-black text-3xl mb-5 bg-center">Notas listadas</h2>
          <p className="mb-10">
            Revisa tus notas{" "}
            <span className="text-indigo-600 font-bold">guardadas</span>
          </p>
          {notas.map((nota) => (
            <Nota 
            key={nota.id} 
            nota={nota} 
            setNota={setNota}
            eliminarNota={eliminarNota}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl mb-5 bg-center">No hay notas</h2>
          <p className="mb-10">
            Agrega notas y{" "}
            <span className="text-indigo-600 font-bold">guardalas</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Listado;
