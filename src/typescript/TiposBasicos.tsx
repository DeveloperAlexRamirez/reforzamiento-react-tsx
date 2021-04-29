const TiposBasicos = () => {
  const nombre: string = 'Alejandro';
  const edad: number = 19;
  const estado: boolean = true;

  const frutas: string[] = ['Sandía 🍉', 'Manzana 🍏', 'Uva 🍇', 'Fresa 🍓'];

  // De esta manera se puede asignar más de un tipo a un arreglo
  // const poderes: (string | number) [] = [];

  return (
    <div className="container text-white">
      <h1 className="display-5 text-primary">1.- Tipos de datos</h1>

      <div className="px-5">
        <h3 className="mt-3">
          <li>String, number and booleand</li>
        </h3>
        <p>
          {nombre}, {edad}, {estado ? 'Activo' : 'No activo'}
        </p>
        <h3>
          <li>Arreglo de frutas</li>
        </h3>
        {frutas.join(', ')}
      </div>
      <hr />
    </div>
  );
};

export default TiposBasicos;
