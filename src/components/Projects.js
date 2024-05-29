import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2024-01-10 165309.png";
import projImg2 from "../assets/img/Screenshot 2024-01-10 165242.png";
import projImg3 from "../assets/img/Screenshot 2024-03-22 133918.png";
import projImg4 from "../assets/img/Screenshot 2024-05-13 165235.png";
import projImg5 from "../assets/img/Screenshot 2024-05-14 183052.png";
import projImg6 from "../assets/img/Screenshot 2024-05-19 181917.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SHOPPEE",
      description: "MERN FULL STACK",
      imgUrl: projImg1,
    },
    {
      title: "HOTSTAR",
      description: "FRONT END REACT",
      imgUrl: projImg2,
    },
    {
      title: "PORTFOLIO",
      description: "HTML/CSS",
      imgUrl: projImg3,
    },
    {
      title: "JOB PORTAL",
      description: "VITE+REACT",
      imgUrl: projImg4,
    },
    {
      title: "HOMIFY",
      description: "HTML/CSS",
      imgUrl: projImg5,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2><br /><br />
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
