import React from "react";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";
//icons
import {
  BsEmojiLaughing,
  BsFillArrowLeftCircleFill,
  BsEmojiSunglasses,
  BsEmojiAngry,
} from "react-icons/bs";
//style
import styles from "./services.module.css";

const Services = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-primary">لورم ایپسوم</h3>
            <p className="text-muted mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </p>
          </Col>
        </Row>
        <Row className="gy-4 gy-lg-0">
          <Col md={6} lg={4}>
            <div className="shadow rounded text-center p-5 blue">
              <BsEmojiLaughing className={styles.blue} />
              <h3 className="fw-bold  my-3 fs-1">لورم ایپسوم</h3>
              <p className="lh-5 fs-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
              <a href="/http" className="link-servic">
                <span>مشاهده بیشتر</span>
                <BsFillArrowLeftCircleFill className={styles.arrow} />
              </a>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="shadow rounded text-center p-5 yellow">
              <BsEmojiSunglasses className={styles.yellow} />
              <h3 className="fw-bold  my-3 fs-1">لورم ایپسوم</h3>
              <p className="lh-5 fs-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
              <a href="/http" className="link-servic yLink">
                <span>مشاهده بیشتر</span>
                <BsFillArrowLeftCircleFill className={styles.arrow} />
              </a>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="shadow rounded text-center p-5 green">
              <BsEmojiAngry className={styles.green} />
              <h3 className="fw-bold my-3 fs-1">لورم ایپسوم</h3>
              <p className="lh-5 fs-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
              <a href="/http" className="link-servic gLink">
                <span>مشاهده بیشتر</span>
                <BsFillArrowLeftCircleFill className={styles.arrow} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
