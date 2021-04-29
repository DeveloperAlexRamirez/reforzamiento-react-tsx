import useCounter from '../hooks/useCounter';

const ContadorConHook = () => {
  const { valor, btnAcumular } = useCounter(0);

  return (
    <div className="container text-white">
      <h2 className="display-5 text-primary">
        4.- Contador con Hook <small>{valor}</small>
      </h2>
      <div className="">
        <button className="m-1 btn btn-primary" onClick={() => btnAcumular(1)}>
          +
        </button>
        <button className="m-1 btn btn-warning" onClick={() => btnAcumular(-1)}>
          -
        </button>
      </div>
      <hr />
    </div>
  );
};

export default ContadorConHook;
