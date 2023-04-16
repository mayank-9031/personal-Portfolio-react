import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mayank Goyal </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />i am persuing B-Tech from Production and Industrial department
            of Punjab Engineering College (PEC) Chandigarh.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing Fun with Friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"I think I am funny!" </p>
          {/* <footer className="blockquote-footer">Mayank</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
