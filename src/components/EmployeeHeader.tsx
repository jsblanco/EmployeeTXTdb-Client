import React, { ReactElement } from "react";
import { Row, Col } from "react-bootstrap";

export default function EmployeeHeader(): ReactElement {
  return (
    <Row className="w-100 py-3 m-0 px-5 text-light bg-secondary justify-content-center">
      <Col lg="1" className="text-center">
        <p className=" mb-0">ID</p>
      </Col>
      <Col lg="2">
        <p className=" mb-0">Name</p>
      </Col>
      <Col lg="2">
        <p className=" mb-0">Address</p>
      </Col>
      <Col lg="2">
        <p className=" mb-0">Phone number</p>
      </Col>
      <Col lg="2">
        <p className=" mb-0">Email</p>
      </Col>
      <Col lg="1">
        <p className=" mb-0">Birthday</p>
      </Col>
      <Col lg="1">
        <p className=" mb-0">Fire employee</p>
      </Col>
    </Row>
  );
}
