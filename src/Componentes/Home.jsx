import { useState, useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { ProjectContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

function Creaciones() {
  const { projects } = useContext(ProjectContext);
  const [likedProjects, setLikedProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('likedProjects'));
    if (storedProjects) {
      setLikedProjects(storedProjects);
    }
  }, []);

  const handleLike = (projectId) => {
    if (sesionIniciada) {
      // Verifica si la sesión está iniciada
      if (!likedProjects.includes(projectId)) {
        const updatedLikedProjects = [...likedProjects, projectId];
        setLikedProjects(updatedLikedProjects);
        localStorage.setItem('likedProjects', JSON.stringify(updatedLikedProjects));
      } else {
        const updatedLikedProjects = likedProjects.filter((id) => id !== projectId);
        setLikedProjects(updatedLikedProjects);
        localStorage.setItem('likedProjects', JSON.stringify(updatedLikedProjects));
      }
    } else {
      alert('Debes iniciar sesión para marcar proyectos como favoritos.');
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <h2>Creaciones destacadas</h2>
        </Col>
      </Row>
      <Row>
        {projects.slice(0, 6).map((item) => (
          <Col sm={4} key={item.id}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Link to={{
                  pathname: `/DetallesProyecto/${item.id}`,
                  state: { project: item },
                }}>
                  <Button variant="primary">Ver Más</Button>
                </Link>

                {likedProjects.includes(item.id) ? (
                  <HeartFill onClick={() => handleLike(item.id)} fill="red" />
                ) : (
                  <Heart onClick={() => handleLike(item.id)} />
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Creaciones;
