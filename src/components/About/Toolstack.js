import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SiLinux, SiVisualstudiocode, SiVercel } from 'react-icons/si';
import { AiFillGitlab, AiFillGithub } from 'react-icons/ai';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <AiFillGitlab />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <AiFillGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
