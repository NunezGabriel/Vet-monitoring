export default function Home() {
  return (
    <>
      <h1 className="mt-10 text-center text-3xl font-black">
        Seguimiento Pacientes
        <span className="text-[#8000FF]"> Veterinaria</span>
      </h1>
      <section className="mt-10 flex flex-col gap-8 md:flex-row max-w-[1000px] mx-auto md:justify-between">
        <div className="p-8 flex flex-col gap-6">
          <h1 className="text-xl font-black text-center">
            Seguimiento Pacientes
          </h1>
          <h5 className="text-sm text-center">
            Añade Pacientes y
            <span className="text-[#8000FF]"> Administralos</span>
          </h5>
        </div>
        <div className="p-8 flex flex-col gap-6">
          <h1 className="text-xl font-black text-center">
            Seguimiento Pacientes
          </h1>
          <h5 className="text-sm text-center">
            Comienza agregando pacientes
            <span className="text-[#8000FF]"> y apareceran en este lugar</span>
          </h5>
        </div>
      </section>
    </>
  );
}
