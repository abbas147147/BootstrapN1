import React from "react";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

//img
import featuresIMG from "../images/features/1.png";
//icons
import {
  BsInstagram,
  BsGithub,
  BsFillBootstrapFill,
  BsTwitter,
  BsTwitch,
  BsTelegram,
} from "react-icons/bs";
//styles
import styles from "./features.module.css";

const Features = () => {
  return (
    <div>
      <Container>
        <Row className="my-5">
          <Col>
            <h2 className="h3 text-primary">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center g-4">
          <Col lg={4}>
            <img src={featuresIMG} alt="features" className="img-fluid" />
          </Col>
          <Col lg={8}>
            <Row className="g-3">
              <Col md={6}>
                <div className="p-3 shadow rounded">
                  <BsInstagram className={styles.icon} />
                  <span className="text-secondary fs-5 fw-bold">
                    لورم ایپسوم متن ساختگی
                  </span>
                  <p className="text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-3 shadow rounded">
                  <BsTwitter className={styles.icon} />
                  <span className="text-secondary fs-5 fw-bold">
                    لورم ایپسوم متن ساختگی
                  </span>
                  <p className="text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-3 shadow rounded">
                  <BsTwitch className={styles.icon} />
                  <span className="text-secondary fs-5 fw-bold">
                    لورم ایپسوم متن ساختگی
                  </span>
                  <p className="text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-3 shadow rounded">
                  <BsTelegram className={styles.icon} />
                  <span className="text-secondary fs-5 fw-bold">
                    لورم ایپسوم متن ساختگی
                  </span>
                  <p className="text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-3 shadow rounded">
                  <BsGithub className={styles.icon} />
                  <span className="text-secondary fs-5 fw-bold">
                    لورم ایپسوم متن ساختگی
                  </span>
                  <p className="text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-3 shadow rounded">
                  <BsFillBootstrapFill className={styles.icon} />
                  <span className="text-secondary fs-5 fw-bold">
                    لورم ایپسوم متن ساختگی
                  </span>
                  <p className="text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
