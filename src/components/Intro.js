import React from "react";

//style
import styles from "./intro.module.css";
//bootstrap
import { Container, Button, Row, Col } from "react-bootstrap";
//img
import introPIC from "../images/intro/intro-img.png";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Container className="g3">
        <Row className="justify-content-center align-items-center my-3">
          <Col lg={6}>
            <h3 className="text-primary">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
            </h3>
            <p className="text-muted my-5">
              لورم ایپسوم متن ساختگی با تولید سادگی.
            </p>
            <Button>لورم ایپسوم</Button>
          </Col>
          <Col lg={6} className="mt-3">
            <img className="img-fluid" src={introPIC} alt="intro" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
