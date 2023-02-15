const Nota = () => {
  return (
    <div>
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <h3 className=" font-bold mb-3 text-gray-700 uppercase">
          Nombre nota: {""}{" "}
          <span className="font-normal normal-case">Nombre nota</span>
        </h3>
        <h4 className=" font-bold mb-3 text-gray-700 uppercase">
          Fecha: {""} <span className="font-normal normal-case">Fecha</span>
        </h4>
        <p className=" font-bold mb-3 text-gray-700 uppercase">
          Contenido: {""}{" "}
          <span className="font-normal normal-case">Contenido</span>
        </p>
      </div>
    </div>
  );
};

export default Nota;
