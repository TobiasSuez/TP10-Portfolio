import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectContext } from '../Context/AuthContext';

function DetallesProyecto() {
  const { projectId } = useParams();
  const { projects } = useContext(ProjectContext);
  const project = projects.find((item) => String(item.id) === String(projectId));
  console.log(project);

  return (
    <div>
      <h2>Detalles del Proyecto</h2>
      {project && (
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.imageUrl} alt={project.title} />
          <p>Date: {project.date}</p>
          <a href={project.url}>URL</a>
          
        </div>
      )}
    </div>
  );
}

export default DetallesProyecto;
