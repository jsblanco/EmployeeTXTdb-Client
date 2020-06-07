import React, { ReactElement } from 'react';
import {Row, Col, Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { deleteEmployeeRequest } from "./../redux/actions";
import * as int from "./../interfaces/interfaces"

interface Props {
    employee: int.EmployeeDbEntry,
}

export default function EmployeeCard({employee}: Props): ReactElement {
    const dispatch = useDispatch();
    const deleteEmployee=()=>{
        console.log(employee.id)
        dispatch(deleteEmployeeRequest(employee.id))
      }
    return (
        <Row className="w-100 py-3 px-5 border rounded shadow my-2 justify-content-center">
            <Col lg="2" className="text-right">{employee.id}-</Col>
            <Col lg="2">
            <p>{employee.firstName}{" "}{employee.lastName}</p>
            </Col>
            <Col lg="2">{employee.address}</Col>
            <Col lg="3">
                <p>
                {employee.phoneNumber}
                </p>
                <p>
                {employee.email}
                </p>
                </Col>
            <Col lg="1">{employee.birthDate}</Col>
            <Col lg="2">
                <Button
                variant="danger"
                onClick={deleteEmployee}
                >Delete</Button>
                </Col>
        </Row>

    )
}
