const Paciente = ({ e, setPaciente, eliminarPaciente }) => {
  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente");
    if (respuesta) {
      eliminarPaciente(e.id);
    }
  };
  return (
    <div className="bg-white shadow-md flex flex-col gap-4  p-5 py-10 rounded-xl">
      <div className="md:flex gap-8">
        <p className="font-bold text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">{e.nombre}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Propietario:{" "}
          <span className="font-normal normal-case">{e.propietario}</span>
        </p>
      </div>

      <div className="md:flex gap-8">
        <p className="font-bold text-gray-700 uppercase">
          Email:
          <span className="font-normal normal-case"> {e.email}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Fecha de alta:
          <span className="font-normal normal-case"> {e.alta}</span>
        </p>
      </div>
      <p className="font-bold text-gray-700 uppercase">
        Sintomas:
        <span className="font-normal normal-case"> {e.sintomas}</span>
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => {
            setPaciente(e);
          }}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => {
            handleEliminar();
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
