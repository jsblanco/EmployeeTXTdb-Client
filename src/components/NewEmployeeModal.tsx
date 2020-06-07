import { Button, Modal, Row } from "react-bootstrap";
import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import * as actions from "./../redux/actions";

export default function NewEmployeeModal(): ReactElement {
  const { showNewEmployeeModal, newEmployeeData } = useSelector(
    (state: any) => state
  );
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(actions.toggleNewEmployeeModal());
  };
  const addNewEmployeeToDb = () => {
    dispatch(actions.addEmployeeRequest(newEmployeeData));
  };

  useEffect(() => {
  }, [newEmployeeData])

  return (
    <>
      <Button onClick={toggleModal}>Create new user</Button>
      <Modal show={showNewEmployeeModal}>
        <Modal.Header>
          <Modal.Title>Create new user</Modal.Title>
          <FontAwesomeIcon
            icon={faTimesCircle}
            size={"2x"}
            className="float-right text-secondary"
            onClick={toggleModal}
          />
        </Modal.Header>
        <Modal.Body className="px-4 text-center">
          <Row>
            <label className="mt-3 mb-0  w-100 d-block" htmlFor="firstName">
              First name:
            </label>
            <input
              className="w-100 d-block"
              required
              name="firstName"
              value={newEmployeeData.firstName}
              placeholder="John"
              onChange={(e) => dispatch(actions.editNewEmployeeData(e))}
            ></input>
          </Row>
          <Row>
            <label className="mt-3 mb-0  w-100 d-block" htmlFor="lastName">
              Last name:
            </label>
            <input
              className="w-100 d-block"
              required
              name="lastName"
              value={newEmployeeData.lastName}
              placeholder="Jackson"
              onChange={(e) => dispatch(actions.editNewEmployeeData(e))}
            ></input>
          </Row>
          <Row>
            <label className="mt-3 mb-0  w-100 d-block" htmlFor="address">
              Address:
            </label>
            <input
              className="w-100 d-block"
              required
              name="address"
              value={newEmployeeData.address}
              placeholder="Fake street, 123"
              onChange={(e) => dispatch(actions.editNewEmployeeData(e))}
            ></input>
          </Row>
          <Row>
            <label className="mt-3 mb-0  w-100 d-block" htmlFor="email">
              Email:
            </label>
            <input
              className="w-100 d-block"
              required
              name="email"
              type="email"
              value={newEmployeeData.email}
              placeholder="john@jackson.com"
              onChange={(e) => dispatch(actions.editNewEmployeeData(e))}
            ></input>
          </Row>
          <Row>
            <label className="mt-3 mb-0  w-100 d-block" htmlFor="phoneNumber">
              Phone number:
            </label>
            <input
              className="w-100 d-block"
              required
              name="phoneNumber"
              value={newEmployeeData.phoneNumber}
              placeholder="123-123-1234"
              onChange={(e) => dispatch(actions.editNewEmployeeData(e))}
            ></input>
          </Row>
          <Row>
            <label className="mt-3 mb-0  w-100 d-block" htmlFor="birthDate">
              Birthday:
            </label>
            <input
              className="w-100 d-block"
              required
              type="date"
              name="birthDate"
              value={newEmployeeData.birthDate}
              onChange={(e) => dispatch(actions.editNewEmployeeData(e))}
            ></input>
          </Row>

          <Button className="mt-3 mb-4" onClick={addNewEmployeeToDb}>
            Add new employee
          </Button>

          {
            newEmployeeData.errors.map((error: string) => (
              <p className="badge py-2 px-3 my-0 text-danger">{error}</p>
            ))}
        </Modal.Body>
      </Modal>
    </>
  );
}
