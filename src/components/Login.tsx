import { useReducer, useEffect } from 'react';

interface AuthState {
  validando: boolean;
  token: null | string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  nombre: '',
};

type LoginPayload = {
  nombre: string;
};

type AuthAction =
  | {
      type: 'logout';
    }
  | { type: 'login'; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        nombre: '',
      };

    case 'login':
      return {
        ...state,
        token: '932874928',
        nombre: action.payload.nombre,
      };

    default:
      return state;
  }
};

const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  const handleLogin = () => {
    dispatch({
      type: 'login',
      payload: {
        nombre: 'Alejandro',
      },
    });
  };

  const handleLogout = () => {
    dispatch({ type: 'logout' });
  };

  if (validando) {
    return (
      <div className="container text-white">
        <h1 className="display-5 text-primary">5.- Login</h1>

        <div className="alert alert-primary mt-4">
          <span>Validando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container text-white">
      <h1 className="display-5 text-primary">5.- Login</h1>

      {token ? (
        <div className="alert alert-success mt-4">
          <span>Bienvenido al sistema: {nombre}</span>
        </div>
      ) : (
        <div className="alert alert-danger mt-4">
          <span>No autenticado</span>
        </div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary mr-6" onClick={handleLogin}>
          Login
        </button>
      )}

      <hr />
    </div>
  );
};

export default Login;
