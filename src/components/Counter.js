import React from "react";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";
//icon
import {
  BsEmojiSmile,
  BsFillJournalBookmarkFill,
  BsHeadphones,
  BsFacebook,
} from "react-icons/bs";
//styles
import styles from "./counter.module.css";

const Counter = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={6} lg={3}>
            <div className="d-flex justify-content-center align-items-center shadow p-3 rounded">
              <BsEmojiSmile className={styles.blue} />
              <div>
                <span className="text-primary fw-bold fs-3">147</span>
                <p className="text-muted">لورم ایپسوم متن</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="d-flex justify-content-center align-items-center shadow p-3 rounded">
              <BsFillJournalBookmarkFill className={styles.orange} />
              <div>
                <span className="text-primary fw-bold fs-3">890</span>
                <p className="text-muted">لورم ایپسوم متن</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="d-flex justify-content-center align-items-center shadow p-3 rounded">
              <BsHeadphones className={styles.green} />
              <div>
                <span className="text-primary fw-bold fs-3">110</span>
                <p className="text-muted">لورم ایپسوم متن</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="d-flex justify-content-center align-items-center shadow p-3 rounded">
              <BsFacebook className={styles.red} />
              <div>
                <span className="text-primary fw-bold fs-3">88</span>
                <p className="text-muted">لورم ایپسوم متن</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Counter;
