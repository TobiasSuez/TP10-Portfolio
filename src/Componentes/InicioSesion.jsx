import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InicioSesion = ({ iniciarSesion }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleInicioSesion = () => {
    // Aquí podrías realizar la lógica de autenticación
    // Por ahora, solo comprobamos si los campos no están vacíos
    if (usuario && contrasena) {
      iniciarSesion(); // Simula el inicio de sesión exitoso
      navigate('/', { replace: true }); // Redirige al usuario a la página principal
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
