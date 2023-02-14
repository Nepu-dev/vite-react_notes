const Formulario = () => {
  return (
    <div className="w-1/2 lg:w-2/5">
      <h2 className=" font-black text-3xl mb-5">Notas</h2>
      <p className="mb-10">Añade notas y <span className="text-indigo-600 font-bold">Administralas</span></p>
      <form className="bg-white shadow-lg rounded-md px-10 py-10">
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
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="nota"
            className="block text-gray-700 font-bold uppercase"
          >
            Nota
          </label>
          <textarea name="nota" id="nota" cols="30" rows="10" className="border-2 w-full p-2 rounded-md mt-2" placeholder="Escriba aqui su nota"></textarea>
        </div>
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-colors" value="Agregar nota"/>
      </form>
    </div>
  );
};

export default Formulario;
