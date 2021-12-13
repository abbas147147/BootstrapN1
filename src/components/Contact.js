import React from "react";

//bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//icons
import { GoLocation } from "react-icons/go";
import {
  BsFillTelephoneInboundFill,
  BsMailbox,
  BsFillStopwatchFill,
} from "react-icons/bs";
//style
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-primary text-center">تماس با ما</h2>
          </Col>
        </Row>
        <Row className="g-3 my-2 align-items-center justify-content-center">
          <Col lg={6}>
            <Row className="g-3">
              <Col lg={6}>
                <div className={styles.box}>
                  <GoLocation className={styles.icon} />
                  <h4 className="text-primary">آدرس</h4>
                  <p className="text-muted">لورم ایپسوم</p>
                  <p className="text-muted">لورم ایپسوم متن ساختگی</p>
                </div>
              </Col>
              <Col lg={6}>
                <div className={styles.box}>
                  <BsFillTelephoneInboundFill className={styles.icon} />
                  <h4 className="text-primary">شماره تماس</h4>
                  <p className="text-muted">09356662688</p>
                  <p className="text-muted">09156263646</p>
                </div>
              </Col>
              <Col lg={6}>
                <div className={styles.box}>
                  <BsMailbox className={styles.icon} />
                  <h4 className="text-primary">ایمیل</h4>
                  <p className="text-muted">abbas.dehghan92@gamil.com</p>
                  <p className="text-muted">abbas.dehghan92@gamil.com</p>
                </div>
              </Col>
              <Col lg={6}>
                <div className={styles.box}>
                  <BsFillStopwatchFill className={styles.icon} />
                  <h4 className="text-primary">پشتیبانی</h4>
                  <p className="text-muted">شنبه - پنج شنبه</p>
                  <p className="text-muted">09:00 - 05:00</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Form className={styles.form}>
              <Row>
                <Col lg={6}>
                  <Form.Label className="text-muted">نام</Form.Label>
                  <Form.Control />
                </Col>
                <Col lg={6}>
                  <Form.Label className="text-muted">ایمیل</Form.Label>
                  <Form.Control />
                </Col>
                <Col lg={12} className="my-3">
                  <Form.Label className="text-muted">موضوع</Form.Label>
                  <Form.Control />
                </Col>
                <Col lg={12}>
                  <Form.Label className="text-muted">متن پیام</Form.Label>
                  <Form.Control as="textarea" rows={2} />
                </Col>
                <Col lg={12} className="mt-5">
                  <Button variant="primary" className="text-center">
                    ارسال پیام
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
