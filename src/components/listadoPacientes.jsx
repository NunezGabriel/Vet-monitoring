import Paciente from "./paciente";

const ListadoPacientes = () => {
  return (
    <div className="p-8 max-w-[550px] flex flex-col gap-6 md:h-screen overflow-y-scroll">
      <h1 className="text-xl font-black text-center">Listado de Pacientes</h1>
      <h5 className="text-sm text-center">
        Administra tus
        <span className="text-indigo-600"> Pacientes y Citas</span>
      </h5>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
};

export default ListadoPacientes;
