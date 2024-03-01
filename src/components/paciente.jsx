const Paciente = ({ e }) => {
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
    </div>
  );
};

export default Paciente;
