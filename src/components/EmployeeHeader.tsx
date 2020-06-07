import React, { ReactElement } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faUser, faMapMarked, faPhone, faEnvelopeOpen, faBirthdayCake, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

export default function EmployeeHeader(): ReactElement {
  return (
    <Row className="w-100 py-3 m-0 px-0 text-light bg-secondary justify-content-center">
      <Col lg="1" className="text-center">
      <FontAwesomeIcon icon={faIdCard} className="text-light"/>
        <p className="d-inline pl-3 mb-0">ID</p>
      </Col>
      <Col lg="2">
      <FontAwesomeIcon icon={faUser} className="text-light"/>
        <p className="d-inline pl-3 mb-0">Name</p>
      </Col>
      <Col lg="2">
      <FontAwesomeIcon icon={faMapMarked} className="text-light"/>
        <p className="d-inline pl-3 mb-0">Address</p>
      </Col>
      <Col lg="2">
      <FontAwesomeIcon icon={faPhone} className="text-light"/>
        <p className="d-inline pl-3 mb-0">Phone number</p>
      </Col>
      <Col lg="2">
      <FontAwesomeIcon icon={faEnvelopeOpen} className="text-light"/>
        <p className="d-inline pl-3 mb-0">Email</p>
      </Col>
      <Col lg="1">
      <FontAwesomeIcon icon={faBirthdayCake} className="text-light"/>
        <p className="d-inline pl-3 mb-0">Birthday</p>
      </Col>
      <Col lg="1">
      <FontAwesomeIcon icon={faDoorOpen} className="text-light"/>
        <p className="d-inline pl-3 mb-0">Remove</p>
      </Col>
    </Row>
  );
}
