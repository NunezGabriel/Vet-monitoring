"use client";
import { useEffect, useState } from "react";

const PacienteForm = () => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

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
        {
          error && (
            <div className="text-red-600">* ERROR llena todos los campos</div>
          ) /*Ponemoos doble && para decir si error es tru pasa eso, asi nos evitamos poner un caso false */
        }
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
          className="bg-indigo-600 hover:bg-indigo-700 transition-colors w-full p-3 text-white uppercase font-bold cursor-pointer"
          value="agregar paciente"
        />
      </form>
    </div>
  );
};

export default PacienteForm;
