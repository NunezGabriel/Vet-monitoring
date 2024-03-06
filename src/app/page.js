"use client";
import ListadoPacientes from "@/components/listadoPacientes";
import PacienteForm from "@/components/Form";
import HeaderComponent from "@/components/header";
import { useState, useEffect } from "react";

export default function Home() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };
  return (
    <>
      <HeaderComponent />
      <section className="mt-10 flex flex-col gap-8 md:flex-row max-w-[1000px] mx-auto md:justify-between">
        <PacienteForm
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
          setPaciente={setPaciente}
        />
      </section>
    </>
  );
}
