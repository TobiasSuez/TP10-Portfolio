import { useState, useContext,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { ProjectContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

function ProyectosFavoritos(){
  const { projects } = useContext(ProjectContext);
  const [likedProjects, setLikedProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('likedProjects'));
    console.log('storedProjects', storedProjects);
    if (storedProjects) {
      setLikedProjects(storedProjects);
    }
  }, []);

  // Filtrar los proyectos que están marcados como favoritos
  const favoriteProjects = projects.filter((project) => likedProjects.includes(project.id));

  return (
    <Container>
      <Row>
        <Col sm={5}></Col>
        <Col sm={4}>
          <h2>Favoritos</h2>
        </Col>
      </Row>
      {favoriteProjects.length === 0 ? (
        <h5>No hay proyectos marcados como favoritos</h5>
      ) : (
      <Row>
        {favoriteProjects.map((item) => (
          <Col sm={4} key={item.id}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Link to={`/DetallesProyecto/${item.id}`}>
                  <Button variant="primary">Ver Mas</Button>
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
      )}
    </Container>
  );
};

export default ProyectosFavoritos;