import { Button, Modal, Row } from "react-bootstrap";
import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import * as actions from "./../redux/actions";

export default function NewEmployeeModal(): ReactElement {
const { showNewEmployeeModal } = useSelector((state:any) => state);
const dispatch = useDispatch()
const toggleModal = () =>{
    dispatch(actions.toggleNewEmployeeModal())
}

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
        <Modal.Body>
          <form className="px-4 text-center">
              <Row>
            <label className="mt-3 mb-0  w-100 d-block" htmlFor="firstName">First name:</label>
            <input className="w-100 d-block" required name="firstName"></input>
              </Row>
              <Row>
              <label className="mt-3 mb-0  w-100 d-block" htmlFor="lastName">Last name:</label>
            <input className="w-100 d-block" required name="lastName"></input>
              </Row>
              <Row>
            <label className="mt-3 mb-0  w-100 d-block" htmlFor="address">Address:</label>
            <input className="w-100 d-block" required name="address"></input>
              </Row>
              <Row>
            <label className="mt-3 mb-0  w-100 d-block" htmlFor="email">Email:</label>
            <input className="w-100 d-block" required name="email"></input>
              </Row>
              <Row>
            <label className="mt-3 mb-0  w-100 d-block" htmlFor="phoneNumber">Phone number:</label>
            <input className="w-100 d-block" required name="phoneNumber"></input>
              </Row>
              <Row>
            <label className="mt-3 mb-0  w-100 d-block" htmlFor="birthDate">Birthday:</label>
            <input className="w-100 d-block" required type="date" name="birthDate"></input>
              </Row>
            <Button type="submit" className="mt-3 mb-4">Add new employee</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
