import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import conways from '../../Assets/Projects/conways.png';
import rgb from '../../Assets/Projects/rgb.png';
import reuseable from '../../Assets/Projects/reuseable.png';
import servy from '../../Assets/Projects/servy.png';
import google from '../../Assets/Projects/google.png';
import beHealthy from '../../Assets/Projects/behealthy_4x.webp';
import portfolio from '../../Assets/Projects/portfolio.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={servy}
              title='servy'
              description='E-commerce dashboard pannel build with React.js and Tailwind Css which manage everything related to the site from login to the small details customization.'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={beHealthy}
              title='beHealthy'
              description='a landing page website for a private medical clinic build with React.js Tailwind CSS which provide a simple description about the clinic as well the main Services they provide.'
              link='https://github.com/Bouab-Ahmed/be-healthy'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={portfolio}
              title='portfolio'
              description='Personal Site build with React.js Bootstrap React pdf and many other tools which provide my main infos and skills'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={google}
              title='Search engine powred by google'
              description='small search engine powred by google buid with React.js Tailwind Css which use an api key to perform 100 search operation per day.'
              link='https://github.com/Bouab-Ahmed/search-engine-powred-by-google'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={rgb}
              title='RGB Game'
              description='Online RGB Colors game build in HMTL/CSS and Javascript which provide 3 levels and random colors genrators with winning mark if you get the right answer'
              link='https://bouab-ahmed.github.io/RGB-game/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={conways}
              title={`Conway's Game of Life`}
              description="The Game of Life is played on an infinite two-dimensional rectangular grid of cells. Each cell can be either alive or dead. The status of each cell changes each turn of the game (also called a generation) depending on the statuses of that cell's 8 neighbors, build in Vanilla Javascript"
              link='https://bouab-ahmed.github.io/game-of-life/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={reuseable}
              title='Reuseable Components'
              description='a site build in React.js and Tailwind CSS which provide a set of reuseable components with react.'
              link='https://bouab-ahmed.github.io/Button-component/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
