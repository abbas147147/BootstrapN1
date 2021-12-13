import React from "react";

//bootstrap
import { Container, Row, Col, Button } from "react-bootstrap";
//images
import cycle1 from "../images/pricing/1.png";
import cycle2 from "../images/pricing/2.png";
import cycle3 from "../images/pricing/3.png";
import cycle4 from "../images/pricing/4.png";

const Pricing = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-primary">قیمت ها</h2>
            <p className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی</p>
          </Col>
        </Row>
        <Row className="gy-2">
          <Col md={6} lg={3}>
            <div className="text-center shadow rounded p-4 pricing">
              <h5 className="text-primary fw-bold fs-2">پلن رایگان</h5>
              <p className="text-muted fw-bold">0 تومان / در ماه</p>
              <img src={cycle1} alt="cycle1" className="img-fluid my-3" />
              <p>لورم ایپسوم متن</p>
              <p>لورم ایپسوم متن ساختگی</p>
              <p className="text-muted text-decoration-line-through">
                لورم متن
              </p>
              <p className="text-muted text-decoration-line-through">
                لورم ایپسوم متن
              </p>
              <p className="text-muted text-decoration-line-through">
                لورم ایپسوم متن
              </p>
              <Button variant="outline-primary">خرید پلن</Button>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="text-center shadow rounded p-4 pricing">
              <h5 className="text-success fw-bold fs-2">پلن اول</h5>
              <p className="text-muted fw-bold">30 تومان / در ماه</p>
              <img src={cycle2} alt="cycle2" className="img-fluid my-3" />
              <p>لورم ایپسوم متن</p>
              <p>لورم ایپسوم متن ساختگی</p>
              <p>لورم متن</p>
              <p className="text-muted text-decoration-line-through">
                لورم ایپسوم متن
              </p>
              <p className="text-muted text-decoration-line-through">
                لورم ایپسوم متن
              </p>
              <Button variant="outline-success">خرید پلن</Button>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="text-center shadow rounded p-4 pricing">
              <h5 className="text-warning fw-bold fs-2">پلن دوم</h5>
              <p className="text-muted fw-bold">75 تومان / در ماه</p>
              <img src={cycle3} alt="cycle1" className="img-fluid my-3" />
              <p>لورم ایپسوم متن</p>
              <p>لورم ایپسوم متن ساختگی</p>
              <p>لورم متن</p>
              <p>لورم ایپسوم متن</p>
              <p className="text-muted text-decoration-line-through">
                لورم ایپسوم متن
              </p>
              <Button variant="outline-warning">خرید پلن</Button>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="text-center shadow rounded p-4 pricing">
              <h5 className="text-danger fw-bold fs-2">پلن سوم</h5>
              <p className="text-muted fw-bold">150 تومان / در ماه</p>
              <img src={cycle4} alt="cycle4" className="img-fluid my-3" />
              <p>لورم ایپسوم متن</p>
              <p>لورم ایپسوم متن ساختگی</p>
              <p>لورم متن</p>
              <p>لورم ایپسوم متن</p>
              <p>لورم ایپسوم متن</p>
              <Button variant="outline-danger">خرید پلن</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
