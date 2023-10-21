import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhant Prasad </span>
            from <span className="purple"> Ranchi, India.</span>
            <br /> I am a final year student pursuing B.Tech in Electrical Engineering
            from NIT Jamshedpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Space Exploration
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "#4d54d386" }}>
            "Life's greatest lessons are learnt through Pain"{" "}
          </p>
          <footer className="blockquote-footer">Siddhant Prasad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
