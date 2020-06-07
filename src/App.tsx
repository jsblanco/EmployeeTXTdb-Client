import React from 'react';
import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import EmployeeCard from './components/EmployeeCard';
import * as int from "./interfaces/interfaces";
import * as actions from "./redux/actions";
import EmployeeHeader from './components/EmployeeHeader';
import NewEmployeeModal from './components/NewEmployeeModal';

const App = () => {
  const dispatch = useDispatch();
  const { employeeList, error, loading } = useSelector((state:any) => state);
  const getEmployeesList=()=>{
    dispatch(actions.getEmployeesRequest())
  }


  return (
    <div>
      <header className="jumbotron mb-0 text-center w-100">
        <h1>Employee management suite</h1>

        <Button 
        variant="success"
        onClick={getEmployeesList}
        >Fetch employees</Button>
        <NewEmployeeModal></NewEmployeeModal>
        <Button 
        variant="warning"
        onClick={()=>dispatch(actions.resetDbRequest())}
        >Reset employee DB</Button>


      </header>
      {(employeeList.length>0) && <><EmployeeHeader/>  {employeeList.map((employee: int.EmployeeDbEntry)=> <EmployeeCard key={employee.id} employee={employee}/>)}</>}
    </div>
  );
}


export default App;
