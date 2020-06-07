import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import EmployeeCard from "./components/EmployeeCard";
import * as int from "./interfaces/interfaces";
import * as actions from "./redux/actions";
import EmployeeHeader from "./components/EmployeeHeader";
import NewEmployeeModal from "./components/NewEmployeeModal";
import Searchbar from "./components/Searchbar";

const App = () => {
  const dispatch = useDispatch();
  const { employeeList, searchCriteria, error, loading } = useSelector(
    (state: any) => state
  );

  useEffect(() => {
    dispatch(actions.getEmployeesRequest());
  }, []);

  return (
    <div>
      <header className="jumbotron mb-0 text-center w-100">
        <h1 className="mb-5 font-weight-bold">Employee management suite</h1>
        <Searchbar />
        <Button
          variant="success"
          className="mx-2"
          onClick={() => dispatch(actions.getEmployeesRequest())}
        >
          Update employee list
        </Button>
        <NewEmployeeModal></NewEmployeeModal>
        <Button
          variant="warning"
          className="mx-2"
          onClick={() => dispatch(actions.resetDbRequest())}
        >
          Reset database entries
        </Button>
      </header>
      {employeeList.length > 0 && (
        <>
          <EmployeeHeader />{" "}
          {employeeList.map(function (employee: int.EmployeeDbEntry) {
            if (
              employee.firstName.toLowerCase().includes(searchCriteria) ||
              employee.lastName.toLowerCase().includes(searchCriteria) ||
              employee.address.toLowerCase().includes(searchCriteria) ||
              employee.email.toLowerCase().includes(searchCriteria) ||
              employee.phoneNumber.toLowerCase().includes(searchCriteria) ||
              employee.birthDate.toLowerCase().includes(searchCriteria) ||
              employee.id === +searchCriteria
            )
              return <EmployeeCard key={employee.id} employee={employee} />;
          })}
        </>
      )}
    </div>
  );
};

export default App;
