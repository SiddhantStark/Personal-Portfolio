import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food from "../../Assets/Projects/Food.png";
import editor from "../../Assets/Projects/Meetups.png";
import summarizer from "../../Assets/Projects/Summarizer.png";
import bitsOfCode from "../../Assets/Projects/Stack Overflow Clone.png";

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
              imgPath={summarizer}
              isBlog={false}
              title="Summarizer"
              description="Made using the OpenAI's GPT Model, built with React.js, Tailwind CSS, and Redux. Have features which allows the user to get the summary of any article just by pasting the link of that article in the form input. "
              ghLink="https://github.com/SiddhantStark/Summerizer"
              demoLink="https://summerizer2001.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Stack Overflow Clone"
              description="A Q/A page built with React.js, CSS, Node.js, Express.js, MongoDB with User Authentication. This is my first MERN stack project. Supports upvote and downvote features and easy to post questions and answers. Handles posting and deletion of questions and answers using CRUD operations."
              ghLink="https://github.com/SiddhantStark/Stack-Overflow-Clone"
              demoLink="https://stack-overflow-clone3000.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Meetups Planner"
              description="This project is made using Next.js, CSS and MongoDB database. This application is used to plan meetups. One can add the details of a meetup using Add New Meetups button, which redirects us to a form page where we can add the respective details."
              ghLink="https://github.com/SiddhantStark/Meetups-Planner"
              demoLink="https://meetups-planner.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Station"
              description="A Food Ordering App, made using React.js, Redux, CSS and Firebase. Have features of adding or deleting items from the cart and also increase or decrease of the quantity of items. Stores the data in the Real time database of Firebase."
              ghLink="https://github.com/SiddhantStark/Food-Order-App"
              demoLink="https://siddhantstark.github.io/Food-Order-App/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
