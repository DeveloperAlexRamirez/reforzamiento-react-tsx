import { useState } from 'react';

const useCounter = (inicial: number = 10) => {
  const [valor, setValor] = useState(inicial);

  const btnAcumular = (numero: number) => {
    setValor(valor + numero);
  };

  return {
    valor,
    btnAcumular,
  };
};

export default useCounter;
