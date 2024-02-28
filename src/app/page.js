"use client";
import ListadoPacientes from "@/components/listadoPacientes";
import PacienteForm from "@/components/Form";
import HeaderComponent from "@/components/header";
import { useState } from "react";

export default function Home() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <>
      <HeaderComponent />
      <section className="mt-10 flex flex-col gap-8 md:flex-row max-w-[1000px] mx-auto md:justify-between">
        <PacienteForm setPacientes={setPacientes} pacientes={pacientes} />
        <ListadoPacientes />
      </section>
    </>
  );
}
