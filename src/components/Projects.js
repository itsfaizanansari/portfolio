import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/forth project.jpg";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";
import portfilio1 from "../assets/img/portfolio1.jpg";
import portfilio2 from "../assets/img/portfolio2.jpg";
import portfilio3 from "../assets/img/portfolio3.jpg";
import portfilio4 from "../assets/img/portfolio4.jpg";
import portfilio5 from "../assets/img/portfolio5.jpg";
import portfilio6 from "../assets/img/portfolio6.jpg";


import colorSharp2 from "../assets/img/color-sharp2.png";

import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";

export const Projects = () => {
  const [toggler, setToggler] = useState(false);
  const [toggler2, setToggler2] = useState(false);
  const [toggler3, setToggler3] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const [productIndex2, setProductIndex2] = useState(0);
  const [productIndex3, setProductIndex3] = useState(0);
  const projects1 = [
    {
      description: "Social Media Creatives",
      imgUrl: portfilio1,
    },
    {
      description: "Covers",
      imgUrl: portfilio2,
    },
    {
      description: "Social Media Posts",
      imgUrl: portfilio3,
    },
    {
      description: "Can Mockups",
      imgUrl: portfilio4,
    },
    {
      description: "Infographics",
      imgUrl: portfilio5,
    },
    {
      description: "Thanks",
      imgUrl: portfilio6,
    },
  ];

  const images1 = [portfilio1, portfilio2, portfilio3, portfilio4, portfilio5, portfilio6];

  const projects2 = [
    {
      description: "Graphic Design",
      imgUrl: projImg1,
    },
    {
      description: "Graphic Design",
      imgUrl: projImg2,
    },
    {
      description: "Graphic Design",
      imgUrl: projImg3,
    },
    {
      description: "Graphic Design",
      imgUrl: projImg4,
    },
    {
      description: "Graphic Design",
      imgUrl: projImg5,
    },
    {
      description: "Graphic Design",
      imgUrl: projImg6,
    },
  ];

  const images2 = [projImg1, projImg2, projImg3, projImg4, projImg5, projImg6];

  const projects3 = [
    {
      description: "Graphic Design",
      imgUrl: portfilio1,
    },
    {
      description: "Graphic Design",
      imgUrl: portfilio2,
    },
    {
      description: "Graphic Design",
      imgUrl: portfilio3,
    },
    {
      description: "Graphic Design",
      imgUrl: portfilio4,
    },
    {
      description: "Graphic Design",
      imgUrl: portfilio5,
    },
    {
      description: "Graphic Design",
      imgUrl: portfilio6,
    },
  ];

  const images3 = [portfilio1, portfilio2, portfilio3, portfilio4, portfilio5, portfilio6];

  const openLightBox = (index) => {
    setProductIndex(index + 1);
    setTimeout(() => {
      setToggler(!toggler);
    }, 100)
  
  };

  const openLightBox2 = (index) => {
    setProductIndex2(index + 1);
    setTimeout(() => {
      setToggler2(!toggler2);
    }, 100)
  
  };

  const openLightBox3 = (index) => {
    setProductIndex3(index + 1);
    setTimeout(() => {
      setToggler3(!toggler3);
    }, 100)
  
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <FsLightbox
            toggler={toggler}
            sources={images1}
            key={productIndex}
            slide={productIndex}
          />
          <FsLightbox
            toggler={toggler2}
            sources={images2}
            key={productIndex2}
            slide={productIndex2}
          />
          <FsLightbox
            toggler={toggler3}
            sources={images3}
            key={productIndex3}
            slide={productIndex3}
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
                          {projects1.map((project, index) => {
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
                          {projects2.map((project, index) => {
                            return (
                              <Col size={12} sm={6} md={4}>
                                <div
                                  className="proj-imgbx"
                                  onClick={()=>openLightBox2(index)}
                                >
                                  <img src={project.imgUrl} />
                                  <div className="proj-txtx">
                                    <h4>{project.title}</h4>
                                    <span>{project.description}</span>
                                  </div>
                                </div>
                              </Col>
                            );
                           
                          })}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                          {projects3.map((project, index) => {
                            return (
                              <Col size={12} sm={6} md={4}>
                                <div
                                  className="proj-imgbx"
                                  onClick={()=>openLightBox3(index)}
                                >
                                  <img src={project.imgUrl} />
                                  <div className="proj-txtx">
                                    <h4>{project.title}</h4>
                                    <span>{project.description}</span>
                                  </div>
                                </div>
                              </Col>
                            );
                          
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
