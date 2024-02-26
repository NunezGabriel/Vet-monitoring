import ListadoPacientes from "@/components/listadoPacientes";
import PacienteForm from "@/components/Form";
import HeaderComponent from "@/components/header";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <section className="mt-10 flex flex-col gap-8 md:flex-row max-w-[1000px] mx-auto md:justify-between">
        <PacienteForm />
        <ListadoPacientes />
      </section>
    </>
  );
}
