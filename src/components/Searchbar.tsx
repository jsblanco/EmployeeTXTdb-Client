import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../redux/actions";

export default function Searchbar(): ReactElement {
  const dispatch = useDispatch();
  const { searchCriteria } = useSelector((state: any) => state);

  return (
    <>

      <input
        value={searchCriteria}
        style={{width: "600px"}}
        className="p-1 mr-3 rounded border"
        name="searchCriteria"
        placeholder="Search for employees..."
        onChange={(e) => dispatch(actions.editSearchCriteria(e.target.value))}
      />
    </>
  );
}
