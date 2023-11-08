import { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { ProjectContext } from '../Context/AuthContext';

function Creaciones() {

  return (
    <Container>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <h2>Sobre Mi</h2>
        </Col>
        <Col sm={3}></Col>
        
        <Col sm={4}></Col>
        <Col sm={4}>
          <h2>Tobias Suez</h2>
          <h4>Actualmente soy estudiante en la secundaria ORT</h4>
          <h4>Interesado en el diseño grafico y el diseño orientado al usuario(UX)</h4>
          <h4>No tengo experiencia laboral </h4>
          <h4>Habilidades blandas: Flexibilidad,capacidad de aprendizaje,comunicacion y pensamiento critico</h4>
          <h4>Habilidades Tecnicas: Adobe Photoshop,Adobe Ilustrator, Figma y Blender</h4>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  );
}

export default Creaciones;
