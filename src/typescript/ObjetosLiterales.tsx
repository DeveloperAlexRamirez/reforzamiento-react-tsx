/**
 * Las interfaces son las que mandan sobre la definición de los objetos
 */

interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Alejandro',
    edad: 19,
    direccion: {
      pais: 'México',
      casaNo: 544,
    },
  };

  return (
    <div className="container text-white">
      <h1 className="display-5 text-primary">2.- Objetos literales</h1>

      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
      <hr />
    </div>
  );
};

export default ObjetosLiterales;
