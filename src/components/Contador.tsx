import { useState } from 'react';

const Contador = () => {
  const [valor, setValor] = useState(0);

  const btnAcumular = (numero: number) => {
    setValor(valor + numero);
  };

  const btnReset = (numero: number) => {
    setValor(numero);
  };

  return (
    <div className="container text-white">
      <h2>
        Contador <small>{valor}</small>
      </h2>
      <div className="">
        <button className="m-1 btn btn-primary" onClick={() => btnAcumular(1)}>
          +
        </button>
        <button className="m-1 btn btn-light" onClick={() => btnReset(0)}>
          Reiniciar
        </button>
        <button className="m-1 btn btn-warning" onClick={() => btnAcumular(-1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default Contador;
