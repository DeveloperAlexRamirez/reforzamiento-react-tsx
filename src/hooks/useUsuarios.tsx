import { ReqResListado, Usuario } from '../interfaces/resRes';
import { useState, useEffect, useRef } from 'react';
import { reqResApi } from '../api/reqResponse';

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(1);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current,
      },
    });
    if (resp.data.data.length > 1) {
      setUsuarios(resp.data.data);
    } else {
      paginaRef.current--;
      alert('No hay más usuarios para mostrar');
    }
  };

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      getUsuarios();
    }
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    getUsuarios();
  };

  return {
    usuarios,
    paginaAnterior,
    paginaSiguiente,
  };
};
