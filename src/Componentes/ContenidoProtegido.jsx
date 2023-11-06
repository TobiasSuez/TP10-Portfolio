import { useNavigate } from 'react-router-dom';

const ContenidoProtegido = ({ cerrarSesion }) => {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    cerrarSesion(); // Cierra la sesión del usuario
    navigate('/login', { replace: true }); // Redirige al usuario a la página de inicio de sesión
  };

  return (
    <div>
      <h2>Contenido Protegido</h2>
      <p>Bienvenido al contenido protegido. Puedes ver esto porque has iniciado sesión.</p>
      <button onClick={handleCerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default ContenidoProtegido;
