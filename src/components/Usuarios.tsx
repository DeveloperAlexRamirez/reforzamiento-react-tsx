import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/resRes';

const Usuarios = () => {
  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

  const renderItem = ({
    id,
    avatar,
    first_name,
    last_name,
    email,
  }: Usuario) => {
    return (
      <tr key={id.toString()} className="tr text-primary">
        <td>
          <img src={avatar} className="avatar" alt={first_name} />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <div className="container text-white">
      <h3 className="display-5 text-primary">Usuarios:</h3>
      <table className="table text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anterior
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        Siguiente
      </button>
    </div>
  );
};

export default Usuarios;
