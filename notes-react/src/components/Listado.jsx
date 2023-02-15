import Nota from "./Nota"
const Listado = () => {
  return (
    <div className="w-1/2 lg:w-3/5">
        <h2 className="font-black text-3xl mb-5 bg-center">Listado</h2>
        <p className="mb-10">Revisa tus notas guardadas</p>
        <Nota></Nota>
    </div>
  )
}

export default Listado