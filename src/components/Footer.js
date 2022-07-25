import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md={12} className='home-about-social'>
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className='purple'>connect </span>with me
          </p>
          <ul className='home-about-social-links'>
            <li className='social-icons'>
              <a
                href='https://github.com/Bouab-Ahmed'
                target='_blank'
                rel='noreferrer'
                className='icon-colour  home-social-icons'>
                <AiFillGithub />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.linkedin.com/in/ahmed-bouab/'
                target='_blank'
                rel='noreferrer'
                className='icon-colour  home-social-icons'>
                <FaLinkedinIn />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.instagram.com/bouab_ahmed_/'
                target='_blank'
                rel='noreferrer'
                className='icon-colour home-social-icons'>
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col md='4' className='footer-copywright'>
          <h3> Developed with {'<3'} by Ahmed BOUAB</h3>
        </Col>
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year} Ab</h3>
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                href='https://github.com/Bouab-Ahmed'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'>
                <AiFillGithub />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.linkedin.com/in/ahmed-bouab/'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'>
                <FaLinkedinIn />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.instagram.com/bouab_ahmed_/'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'>
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
