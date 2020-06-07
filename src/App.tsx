import React from 'react';
import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import EmployeeCard from './components/EmployeeCard';
import * as int from "./interfaces/interfaces";
import { getEmployeesRequest } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const { employeeList, error, loading } = useSelector((state:any) => state);
  const getEmployeesList=()=>{
    dispatch(getEmployeesRequest)
  }


  return (
    <div>
      <header className="junbotron">
        <h1>Employee management suite</h1>

        <Button 
        variant="primary"
        onClick={getEmployeesList}
        >Fetch employees</Button>

      </header>
      {!!employeeList && employeeList.map((employee: int.Employee)=> <EmployeeCard employee={employee}/>)}
    </div>
  );
}


export default App;
