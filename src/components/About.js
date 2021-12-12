import React from "react";

//bootstrap
import { Container, Button, Row, Col } from "react-bootstrap";
//img
import aboutPIC from "../images/about/about.jpg";
//styles
import styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <Container className="my-5 ">
        <Row className="justify-content-center align-items-center gy-5">
          <Col lg={6} className="text-center text-lg-end">
            <div className={styles.content}>
              <h3 className="text-primary ">لورم ایپسوم متن ساختگی</h3>
              <h2 className="fw-bold fs-3 h2 lh-base ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت.
              </h2>
              <p className="text-muted lh-base">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
              </p>
              <Button>لورم ایپسوم</Button>
            </div>
          </Col>
          <Col lg={6}>
            <img src={aboutPIC} alt="about" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
