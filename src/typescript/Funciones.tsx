const Funciones = () => {
  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <div className="container text-white">
        <h1 className="display-5 text-primary">3.- Funciones</h1>
        <p>El resultado de la suma es: {sumar(825, 782)}</p>
        <hr />
      </div>
    </>
  );
};

export default Funciones;
