import React, { ReactElement } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteEmployeeRequest } from "./../redux/actions";
import * as int from "./../interfaces/interfaces";

interface Props {
  employee: int.EmployeeDbEntry;
}

export default function EmployeeCard({ employee }: Props): ReactElement {
  const dispatch = useDispatch();
  const deleteEmployee = () => {
    dispatch(deleteEmployeeRequest(employee.id));
  };
  return (
    <Row className="w-100 py-3 px-0 border rounded shadow mx-0 mb-3 justify-content-center">
      <Col lg="1" className="text-center font-weight-bold">
        {employee.id}
      </Col>
      <Col lg="2">
        <p>
          {employee.firstName} {employee.lastName}
        </p>
      </Col>
      <Col lg="2">{employee.address.substring(1, (employee.address.length-1))}</Col>
      <Col lg="2">
        <p>{employee.phoneNumber}</p>
      </Col>
      <Col lg="2">
        <p>{employee.email}</p>
      </Col>
      <Col lg="1">{employee.birthDate}</Col>
      <Col lg="1">
        <Button variant="danger" onClick={deleteEmployee}>
          Delete
        </Button>
      </Col>
    </Row>
  );
}
