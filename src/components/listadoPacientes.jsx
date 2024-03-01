import Paciente from "./paciente";

const ListadoPacientes = ({ pacientes }) => {
  return (
    <>
      {pacientes.length == 0 ? (
        <div className="p-8 max-w-[550px] mx-auto flex flex-col gap-6 md:h-screen overflow-y-scroll">
          <h1 className="text-xl font-black text-center">No Hay Pacientes </h1>
          <h5 className="text-sm text-center">
            Comienza agregando pacientes
            <span className="text-indigo-600"> y apareceran en este lugar</span>
          </h5>
        </div>
      ) : (
        <div className="p-8 max-w-[550px] mx-auto flex flex-col gap-6 md:h-screen overflow-y-scroll">
          <h1 className="text-xl font-black text-center">
            Listado de Pacientes
          </h1>
          <h5 className="text-sm text-center">
            Administra tus
            <span className="text-indigo-600"> Pacientes y Citas</span>
          </h5>
          {pacientes.map((e) => {
            return <Paciente key={e.id} e={e} />;
          })}
        </div>
      )}
    </>
  );
};

export default ListadoPacientes;
