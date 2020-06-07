import * as constants from "./constants";
import { PayloadAction, TypeGetter } from "react-redux-typescript";
import * as int from "./../interfaces/interfaces"
const initialState = {
  employeeList: [],
  error: "",
};

export default (state = initialState, { type, payload }:int.Payload) => {
  switch (type) {
    case constants.GET_EMPLOYEES_REQUEST:
    case constants.ADD_EMPLOYEE_REQUEST:
    case constants.DELETE_EMPLOYEE_REQUEST:
    case constants.RESET_DATABASE_REQUEST:
      if (!!state.employeeList)
        return { ...state, employeeList: [], error: "", loading: true };
      return {
        ...state,
      };
    case constants.GET_EMPLOYEES_SUCCESS:
    case constants.ADD_EMPLOYEE_SUCCESS:
    case constants.DELETE_EMPLOYEE_SUCCESS:
    case constants.RESET_DATABASE_SUCCESS:
      return {
        ...state,
        employeeList: payload,
      };
    case constants.GET_EMPLOYEES_FAILURE:
    case constants.ADD_EMPLOYEE_FAILURE:
    case constants.DELETE_EMPLOYEE_FAILURE:
    case constants.RESET_DATABASE_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
