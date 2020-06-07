import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./redux/actions";
import NewEmployeeModal from "./components/NewEmployeeModal";
import Searchbar from "./components/Searchbar";
import Pagination from "./components/Pagination";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state: any) => state);
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
      {!!error
      ?<ErrorMessage/>
      :<Pagination />
      }
    </div>
  );
};

export default App;
