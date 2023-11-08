import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../Context/AuthContext';

const InicioSesion = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  // Accede al contexto de autenticación
  const { iniciarSesion } = useContext(ProjectContext);

  const handleInicioSesion = () => {
    // Realiza la lógica de autenticación aquí
    if (usuario && contrasena) {
      iniciarSesion(); // Utiliza la función del contexto para iniciar sesión
      navigate('/Home', { replace: true }); // Redirige al usuario a la página principal
    } else {
      alert('Por favor, ingresa un usuario y contraseña válidos.');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <label>
          Usuario:
          <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleInicioSesion}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default InicioSesion;
