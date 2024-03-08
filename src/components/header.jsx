const HeaderComponent = ({ theme }) => {
  return (
    <h1 className="text-center text-3xl font-black">
      Seguimiento Pacientes
      <span className={`${theme ? "darBgGreenText" : "text-indigo-600"}`}>
        {" "}
        Veterinaria
      </span>
    </h1>
  );
};

export default HeaderComponent;
