import * as constants from "./constants";
import { PayloadAction, TypeGetter } from "react-redux-typescript";
import * as int from "./../interfaces/interfaces"
const initialState = {
  employeeList: [],
  error: "",
  showNewEmployeeModal: false,
  newEmployeeData:{
    errors:[]
  }
};

export default (state = initialState, { type, payload }:any) => {
  switch (type) {
    case constants.GET_EMPLOYEES_REQUEST:
    case constants.ADD_EMPLOYEE_REQUEST:
    case constants.DELETE_EMPLOYEE_REQUEST:
    case constants.RESET_DATABASE_REQUEST:
      if (!!state.employeeList)
        return { ...state, loading: true };
      return {
        ...state,
      };
    case constants.GET_EMPLOYEES_SUCCESS:
    case constants.ADD_EMPLOYEE_SUCCESS:
    case constants.DELETE_EMPLOYEE_SUCCESS:
    case constants.RESET_DATABASE_SUCCESS:
      return {
        ...state,
        newEmployeeData:{
          errors:[]
        },
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
    case constants.TOGGLE_NEW_EMPLOYEE_MODAL:
      return{
        ...state,
        showNewEmployeeModal: !state.showNewEmployeeModal
      }
    case constants.EDIT_NEW_EMPLOYEE_DATA:
      return{
        ...state,
        newEmployeeData: {
          ...state.newEmployeeData,
          errors:[],
          [payload.target.name]: payload.target.value.trim(),
        }
      }
    case constants.ADD_EMPLOYEE_FORMAT_IS_NOT_OK:
      return{
        ...state,
        newEmployeeData: {
          ...state.newEmployeeData,
          errors:payload,
        }
      }
    default:
      return state;
  }
};
