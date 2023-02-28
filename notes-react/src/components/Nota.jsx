const Nota = ({nota}) => {
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
          <span className="font-normal normal-case">{nota.nota}</span>
        </p>
      </div>
    </div>
  );
};

export default Nota;
