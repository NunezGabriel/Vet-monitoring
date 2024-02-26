const Paciente = () => {
  return (
    <div className="bg-white shadow-md flex flex-col gap-4  p-5 py-10 rounded-xl">
      <div className="md:flex gap-8">
        <p className="font-bold text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Propietario: <span className="font-normal normal-case">Gabriel</span>
        </p>
      </div>

      <div className="md:flex gap-8">
        <p className="font-bold text-gray-700 uppercase">
          Email:
          <span className="font-normal normal-case"> gabriel.na@gmail.com</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Fecha de alta:
          <span className="font-normal normal-case"> 10 dic. 2024</span>
        </p>
      </div>
      <p className="font-bold text-gray-700 uppercase">
        Sintomas:
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          temporibus iure nemo, reprehenderit molestias ut! Architecto earum
          eaque consequuntur expedita quam odit nostrum nam odio, ea, sed libero
          dignissimos autem?
        </span>
      </p>
    </div>
  );
};

export default Paciente;
