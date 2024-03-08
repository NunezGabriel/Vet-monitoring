"use client";
import ListadoPacientes from "@/components/listadoPacientes";
import PacienteForm from "@/components/Form";
import HeaderComponent from "@/components/header";
import { useState, useEffect } from "react";
import ThemeSwitch from "@/components/themeSwitch";

export default function Home() {
  //Darkmode
  const [theme, setTheme] = useState(false);
  //////////
  const [paciente, setPaciente] = useState({});
  const [pacientes, setPacientes] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("pacientes")) ?? []
      : null
  );

  useEffect(() => {
    typeof window !== "undefined"
      ? localStorage.setItem("pacientes", JSON.stringify(pacientes))
      : undefined;
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };
  return (
    <div
      className={`py-10 ${theme ? "darBg darBgText" : "lightBg lightBgText"} `}
    >
      <ThemeSwitch theme={theme} setTheme={setTheme} />

      <HeaderComponent theme={theme} />
      <section className="mt-10 flex flex-col gap-8 md:flex-row max-w-[1000px] mx-auto md:justify-between">
        <PacienteForm
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          theme={theme}
        />
        <ListadoPacientes
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
          setPaciente={setPaciente}
          theme={theme}
        />
      </section>
    </div>
  );
}
