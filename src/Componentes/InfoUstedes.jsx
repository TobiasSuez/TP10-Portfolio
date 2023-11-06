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
          <h2>Sobre Nosotros</h2>
        </Col>
        <Col sm={3}></Col>
        <Col sm={4}>
          <h2>Lucas Schlez</h2>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
        </Col>

        <Col sm={4}></Col>
        <Col sm={4}>
          <h2>Tobias Suez</h2>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
          <h4>info 1</h4>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  );
}

export default Creaciones;
