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

  const [pacientes, setPacientes] = useState(
    // JSON.parse(localStorage.getItem("pacientes")) ?? []
    []
  );
  const [paciente, setPaciente] = useState({});

  //Ese codigo comentao junto conelcopdigo comment del useState de arrrba es de local storage y como es nextJS y no react con vite no se puede deployar con local storage asi que lo comento y lo deployo asi nomas no se gurada en ningun lado, ccuando puedas creale un backend sencillo usando la tecnoologia que  quieras en donde puedas almacenar las cartas de paciente asi la app esta completa al 100%

  ///////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   localStorage.setItem("pacientes", JSON.stringify(pacientes));
  // }, [pacientes]);
  ///////////////////////////////////////////////////////////////////////////
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
