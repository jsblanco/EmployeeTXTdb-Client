import React from 'react';
import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import EmployeeCard from './components/EmployeeCard';
import * as int from "./interfaces/interfaces";
import { getEmployeesRequest, resetDbRequest } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const { employeeList, error, loading } = useSelector((state:any) => state);
  const getEmployeesList=()=>{
    dispatch(getEmployeesRequest())
  }


  return (
    <div>
      <header className="junbotron">
        <h1>Employee management suite</h1>

        <Button 
        variant="success"
        onClick={getEmployeesList}
        >Fetch employees</Button>
        <Button 
        variant="primary"
        onClick={()=>dispatch(resetDbRequest())}
        >Reset employee DB</Button>

      </header>
      {!!employeeList && employeeList.map((employee: int.EmployeeDbEntry)=> <EmployeeCard key={employee.id} employee={employee}/>)}
    </div>
  );
}


export default App;
