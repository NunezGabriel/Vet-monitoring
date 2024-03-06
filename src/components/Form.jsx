"use client";
import { useEffect, useState } from "react";
import ErrorComponent from "./error";

const PacienteForm = ({ setPacientes, pacientes, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      //Object.keys() => es la forma de ver las llaves de un objeto y asi aplicar la logica para lo que querramos en este caso veo si el objeto esta lleno
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validacion del fomruilario
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      console.log("hay almenos un campo vacio");
      setError(true);
    } else {
      console.log("todos los campos estan llenos");
      setError(false);
    }
    /////////////////////////////////////
    const generarID = () => {
      const random = Math.random().toString(36);
      const fecha = Date.now().toString(36);

      return random + fecha;
    };
    /////////////////////////////////////
    //objeto de paciente
    const objetoPaciente = {
      //no es necesario poner key y value solo basta con el key ya que si el key va a tener el mismo valor que el value por las nuevas feaatures de js se puede poner asi, te ahorras text :)
      nombre, // normalmente iria asi-> nombre: nombre;
      propietario,
      email,
      alta,
      sintomas,
      id: generarID(),
    };
    //agregando datos del form al state
    setPacientes([...pacientes, objetoPaciente]); //hacemos esto prq si solo agregamos objeto paciente se va a reescribir cada vez que agregarmso un paciente nuevo pero con esto hacemos una copia de lo que habia antes en el array y agregamos un nuevo paciente :)

    //reiniciando el form
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };
  return (
    <div className="p-8 flex flex-col gap-6">
      <h1 className="text-xl font-black text-center">Seguimiento Pacientes</h1>
      <h5 className="text-sm text-center">
        Añade Pacientes y<span className="text-indigo-600"> Administralos</span>
      </h5>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 bg-white shadow-md rounded-lg py-10 px-5"
      >
        {error && (
          <ErrorComponent>
            <p>* ERROR llena todos los campos</p>
          </ErrorComponent>
        )}

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
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
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
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            value={alta}
            onChange={(e) => {
              setAlta(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="sintomas"
            className="text-gray-700 font-bold uppercase"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            placeholder="Describe los Sintomas"
            cols="30"
            rows="3"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 transition-colors w-full p-3 text-white uppercase font-bold cursor-pointer rounded-lg"
          value={paciente.id ? "Editar Paciente" : "Agregar  Paciente"}
        />
      </form>
    </div>
  );
};

export default PacienteForm;
