import React, { ReactElement } from 'react';
import {Row, Col, Button } from "react-bootstrap"
import * as int from "./../interfaces/interfaces"

interface Props {
    employee: int.Employee,
}

export default function EmployeeCard({employee}: Props): ReactElement {
    return (
        <div>
            <h4>{employee.firstName}{" "}{employee.lastName}</h4>
        </div>
    )
}
