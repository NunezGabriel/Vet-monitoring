const ErrorComponent = ({ children }) => {
  return (
    <div className="text-red-600">
      <p>{children}</p>
    </div> /*Ponemoos doble && para decir si error es tru pasa eso, asi nos evitamos poner un caso false */
  );
};

export default ErrorComponent;
