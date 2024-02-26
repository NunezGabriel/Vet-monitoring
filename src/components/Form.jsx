const PacienteForm = () => {
  return (
    <div className="p-8 flex flex-col gap-6">
      <h1 className="text-xl font-black text-center">Seguimiento Pacientes</h1>
      <h5 className="text-sm text-center">
        Añade Pacientes y<span className="text-indigo-600"> Administralos</span>
      </h5>
      <form className="flex flex-col gap-8 bg-white shadow-md rounded-lg py-10 px-5">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="first-input"
            className="text-gray-700 font-bold uppercase"
          >
            Nombre mascota
          </label>
          <input
            id="first-input"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la Mascota"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="second-input"
            className="text-gray-700 font-bold uppercase"
          >
            Nombre Propietario
          </label>
          <input
            id="second-input"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-700 font-bold uppercase">
            email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="user@email.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="alta" className="text-gray-700 font-bold uppercase">
            alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="date"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="sintomas"
            className="text-gray-700 font-bold uppercase"
          >
            alta
          </label>
          <textarea
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            placeholder="Describe los Sintomas"
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 transition-colors w-full p-3 text-white uppercase font-bold cursor-pointer"
          value="agregar paciente"
        />
      </form>
    </div>
  );
};

export default PacienteForm;
