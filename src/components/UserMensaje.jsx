
import PropTypes from "prop-types";
import MensajeOnline from "./MensajeOnline";
import MensajeOffline from "./MensajeOffline";
const UserMensaje = ({ usuario }) => {
  return usuario ? <MensajeOnline /> : <MensajeOffline />;
  //return <h3> { usuario ? ( "Bienvenido usuario" ) : ( "Usuario desconectado" ) } </h3>
};

UserMensaje.propTypes = {
    usuario: PropTypes.bool.isRequired,
    
}

export default UserMensaje;