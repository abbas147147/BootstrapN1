import React from "react";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

//icons
import { BsInstagram, BsGithub, BsTwitter, BsTelegram } from "react-icons/bs";
import { IoMdArrowDropleft } from "react-icons/io";
//style
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row className="gy-3 gy-lg-0">
          <Col lg={6}>
            <h3 className="text-primary fw-bold">Abbas Dehghan</h3>
            <p className="text-muted my-3">
              طراح صفحات وب با استفاده از کتاب خانه React و فریمورک بوت استرپ
            </p>
            <div>
              <BsGithub className={styles.footerIcon} />
              <BsInstagram className={styles.footerIcon} />
              <BsTelegram className={styles.footerIcon} />
              <BsTwitter className={styles.footerIcon} />
            </div>
          </Col>
          <Col lg={2}>
            <h4 className="text-primary">لینک ها</h4>
            <hr className="hr" />
            <div>
              <ul className="list-unstyled">
                <li>
                  <span>
                    <IoMdArrowDropleft /> صفحه اصلی
                  </span>
                </li>
                <li>
                  <span>
                    <IoMdArrowDropleft /> محصولات
                  </span>
                </li>
                <li>
                  <span>
                    <IoMdArrowDropleft /> خدمات
                  </span>
                </li>
                <li>
                  <span>
                    <IoMdArrowDropleft /> تماس با ما
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <h4 className="text-primary"> خدمات</h4>
            <hr className="hr" />
            <div>
              <ul className="list-unstyled">
                <li>
                  <span>
                    <IoMdArrowDropleft /> لورم ایپسوم
                  </span>
                </li>
                <li>
                  <span>
                    <IoMdArrowDropleft /> محصولات
                  </span>
                </li>
                <li>
                  <span>
                    <IoMdArrowDropleft /> لورم ایپسوم
                  </span>
                </li>
                <li>
                  <span>
                    <IoMdArrowDropleft /> تماس با ما
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <h4 className="text-primary"> ارتباط با ما</h4>
            <hr className="hr" />
            <div>
              <ul className="list-unstyled">
                <li>
                  <span>
                    <IoMdArrowDropleft /> خدمات
                  </span>
                </li>
                <li>
                  <span>
                    <IoMdArrowDropleft /> تماس با ما
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
