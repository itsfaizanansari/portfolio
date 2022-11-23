import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/forth project.jpg";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";

export const Projects = () => {
  const [toggler, setToggler] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const projects = [
    {
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  const images = [projImg1, projImg2, projImg3, projImg4, projImg5, projImg6];

  const openLightBox = (index) => {
    setProductIndex(index + 1);
    setTimeout(() => {
      setToggler(!toggler);
    }, 100)
  
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <FsLightbox
            toggler={toggler}
            sources={images}
            key={productIndex}
            slide={productIndex}
          />
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I show you to all the big and small websites I have done so
                    far
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                      <Nav.Link eventKey="second">Projects 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projects 3</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <Col size={12} sm={6} md={4}>
                                <div
                                  className="proj-imgbx"
                                  onClick={()=>openLightBox(index)}
                                >
                                  <img src={project.imgUrl} />
                                  <div className="proj-txtx">
                                    <h4>{project.title}</h4>
                                    <span>{project.description}</span>
                                  </div>
                                </div>
                              </Col>
                            );
                            // return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {projects.map((project, index) => {
                            return (
                              <Col size={12} sm={6} md={4}>
                                <div
                                  className="proj-imgbx"
                                  onClick={()=>openLightBox(index)}
                                >
                                  <img src={project.imgUrl} />
                                  <div className="proj-txtx">
                                    <h4>{project.title}</h4>
                                    <span>{project.description}</span>
                                  </div>
                                </div>
                              </Col>
                            );
                            // return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                          {projects.map((project, index) => {
                            return (
                              <Col size={12} sm={6} md={4}>
                                <div
                                  className="proj-imgbx"
                                  onClick={()=>openLightBox(index)}
                                >
                                  <img src={project.imgUrl} />
                                  <div className="proj-txtx">
                                    <h4>{project.title}</h4>
                                    <span>{project.description}</span>
                                  </div>
                                </div>
                              </Col>
                            );
                            // return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                    </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
