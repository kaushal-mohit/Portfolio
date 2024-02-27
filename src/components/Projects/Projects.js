import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coin from "../../Assets/Projects/coin.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coin}
              isBlog={false}
              title="Coin Tracker"
              description="Developed a dynamic web application using ReactJS to display real-time exchange rates of various cryptocurrencies. Implemented a coin watchlist feature using Firebase Realtime Database, allowing users to track their favorite cryptocurrencies.Techstack consisted of ReactJS, MaterialUI, ChartJS, Firebase, Coin Gecko API"
              ghLink="https://crypto-cointracker.netlify.app/"
            />``
          </Col>
          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
