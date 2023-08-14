

import BotonState from "./components/BotonState";
import ListaFrutas from "./components/ListaFruta";
import MiBoton from "./components/MiBoton";
import UserMensaje from "./components/UserMensaje";


const App = () => {
  const titulo = "Mi primer proyecto con React.js";
  const imagen = "https://picsum.photos/600/400";
  const clases = {
    titulo: "text-info text-center",
    subtitulo: " text-info text-center",
    imagenCenter: "rounded  d-block mx-auto",
  };
  const user = true;
  return (
    <div className="container">
      <h1 className={clases.titulo}>{titulo}</h1>
      <p className={clases.subtitulo}>Lorem ipsum dolor sit.</p>
      <img className={clases.imagenCenter} src="./src/assets/react.svg" />
      <hr />
      <BotonState />
      <hr></hr>
      <img
        className={clases.imagenCenter}
        src={imagen}
        alt={`Imagen de ${titulo}`}
      />
      <hr></hr>
      {/* {user ? <MensajeOnline /> : <MensajeOffline />} */}
      <UserMensaje usuario={user} />
      <MiBoton text="Boton 1" className="btn btn-light m-3"/>
      <MiBoton text="Boton 2" className="btn btn-warning m-3"/>
      <MiBoton text="Boton 3" className="btn btn-success m-3" />
      <MiBoton text="Boton 4" className="btn btn-danger m-3"/>
      <hr></hr>
      <ListaFrutas />
    </div>
  );
};

export default App;