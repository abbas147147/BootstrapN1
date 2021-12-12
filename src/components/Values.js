import React from "react";

//bootstrap
import { Container, Button, Row, Col, Card } from "react-bootstrap";
//img
import valusIMG1 from "../images/values/1.png";
import valusIMG2 from "../images/values/2.png";
import valusIMG3 from "../images/values/3.png";

const Values = () => {
  return (
    <div>
      <Container className="my-4">
        <Row className="text-center">
          <Col md={12}>
            <h2 className="text-primary">لورم ایپسوم</h2>
          </Col>
          <Col md={12}>
            <p className="text-muted mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center mx-auto gy-4 gy-lg-0">
          <Col lg={4}>
            <Card
              style={{
                width: "18rem",
                padding: "10px , 25px",
                textAlign: "center",
                margin: "0 auto",
              }}
              className="shadow"
            >
              <Card.Img variant="top" src={valusIMG1} />
              <Card.Body>
                <Card.Title className="text-primary  fw-bold">
                  لورم ایپسوم متن ساختگی
                </Card.Title>
                <Card.Text className="text-muted">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </Card.Text>
                <Button variant="primary">مشاهده بیشتر</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              style={{
                width: "18rem",
                padding: "10px , 25px",
                textAlign: "center",
                margin: "0 auto",
              }}
              className="shadow"
            >
              <Card.Img variant="top" src={valusIMG2} />
              <Card.Body>
                <Card.Title className="text-primary  fw-bold">
                  لورم ایپسوم متن ساختگی
                </Card.Title>
                <Card.Text className="text-muted">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </Card.Text>
                <Button variant="primary">مشاهده بیشتر</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              style={{
                width: "18rem",
                padding: "10px , 25px",
                textAlign: "center",
                margin: "0 auto",
              }}
              className="shadow"
            >
              <Card.Img variant="top" src={valusIMG3} />
              <Card.Body>
                <Card.Title className="text-primary fw-bold">
                  لورم ایپسوم متن ساختگی
                </Card.Title>
                <Card.Text className="text-muted">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </Card.Text>
                <Button variant="primary">مشاهده بیشتر</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Values;
