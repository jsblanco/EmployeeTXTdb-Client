import * as constants from "./constants";
import * as int from "../interfaces/interfaces"

export const getEmployeesRequest = () => ({
  type: constants.GET_EMPLOYEES_REQUEST,
});

export const GetEmployeesSuccess = (payload: int.Payload) => ({
  type: constants.GET_EMPLOYEES_SUCCESS,
  payload,
});

export const GetEmployeesFailure = (payload: int.Payload) => ({
  type: constants.GET_EMPLOYEES_FAILURE,
  payload,
});

export const addEmployeeRequest = (payload: int.Payload) => ({
  type: constants.ADD_EMPLOYEE_REQUEST,
  payload,
});

export const addEmployeeSuccess = (payload: int.Payload) => ({
  type: constants.ADD_EMPLOYEE_SUCCESS,
  payload,
});

export const addEmployeeFailure = (payload: int.Payload) => ({
  type: constants.ADD_EMPLOYEE_FAILURE,
  payload,
});

export const deleteEmployeeRequest = (payload: int.Payload | number) => ({
  type: constants.DELETE_EMPLOYEE_REQUEST,
  payload,
});

export const deleteEmployeeSuccess = (payload: int.Payload) => ({
  type: constants.DELETE_EMPLOYEE_SUCCESS,
  payload,
});

export const deleteEmployeeFailure = (payload: int.Payload) => ({
  type: constants.DELETE_EMPLOYEE_FAILURE,
  payload,
});

export const resetDbRequest = () => ({
  type: constants.RESET_DATABASE_REQUEST,
});

export const resetDbSuccess = (payload: int.Payload) => ({
  type: constants.RESET_DATABASE_SUCCESS,
  payload
});

export const resetDbFailure = (payload: int.Payload) => ({
  type: constants.RESET_DATABASE_SUCCESS,
  payload,
});
