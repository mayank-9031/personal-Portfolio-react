import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Admin Dashboard App"
              description="Developed an Admin dashboard app using React.js and Material Ui that provides a comprehensive view of key business metrics and data.
              Implemented data visualization libraries such as D3.js and Chart.js to create interactive charts and graphs that help users understand data trends and patterns."
              // description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/mayank-9031/Admin-Dashboard-App"
              demoLink="https://admin-dashboard-app-sage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Connectify"
              description="It is the Frontend part of a social media app.
               Designed and implemented the app's user interface using React components, HTML, and CSS. It has a like and dislike functionality along with login/register page."
              // description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/mayank-9031/Social-Media-App"
              demoLink="https://social-media-app-wheat.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Expense Tracker"
              description="Designed and developed a user-friendly and responsive expense tracker website using React.js, allowing users to easily track and manage their daily expenses.
               Successfully deployed the expense tracker website to production, using tools such as Git, GitHub, Vercel and continuous integration and deployment (CI/CD) pipelines."
              // description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/mayank-9031/Expense-Tracker"
              demoLink="https://expense-tracker-rho-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Disney+ Hotstar Clone"
              description="Developed a Disney+ Hotstar clone project using HTML, CSS and JavaScript that replicates the streaming
              platform's user interface and features."
              // description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/mayank-9031/Disney-Hotstar-Clone"
              demoLink="https://mayank-9031.github.io/Disney-Hotstar-Clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Robotics Society PEC"
              description="This is the official website of Robotics Society of PEC Chandigarh.
              It was a team project and i was the responsible for frontend development of the website."
              // description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/mayank-9031/Robotics-PEC.github.io"
              demoLink="https://robotics-pec.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Personal Portfolio Website"
              description="My personal website contains all my informations, skills and project works.
              I created this Responsive website using HTML, CSS and JavaScript."
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/mayank-9031/personal-Portfolio-react"
              demoLink="https://personal-portfolio-react-six.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
