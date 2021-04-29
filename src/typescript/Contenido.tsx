import TiposBasicos from './TiposBasicos';
import ObjetosLiterales from './ObjetosLiterales';
import Funciones from './Funciones';
import Contador from '../components/Contador';
import ContadorConHook from '../components/ContadorConHook';
import Login from '../components/Login';
import Usuarios from '../components/Usuarios';

const Contenido = () => {
  return (
    <>
      {/* Primer contenido */}
      <div className="bg-primary w-100 p-1">
        <nav className="container">
          <h1 className="text-white py-2">
            Introducción de Typescript con React
          </h1>
        </nav>
      </div>
      {/* Segundo contenido */}
      <hr />
      <div className="container d-flex justify-content-end">
        <h2 className="text-white mt-2">Basic types</h2>
      </div>
      <TiposBasicos />
      <ObjetosLiterales />
      <Funciones />
      <Contador />
      <ContadorConHook />
      <Login />
      <Usuarios />
    </>
  );
};

export default Contenido;
