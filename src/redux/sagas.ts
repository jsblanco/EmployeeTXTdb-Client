import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import * as api from "../api/api-calls";
import * as actions from "./actions";
import * as int from "../interfaces/interfaces"
import {processNewEmployee} from "./../helpers/processNewEmployee"

function* getEmployeeListEffect() {
  try {
    yield call(actions.getEmployeesRequest);
    const employees = yield call(api.getEmployees);
    yield put(actions.GetEmployeesSuccess(employees));
  } catch (e) {
    yield put(actions.GetEmployeesFailure(e));
  }
}

function* addEmployeeToDb(payload: any) {
  try {
    yield call(actions.addEmployeeRequest, payload);
    const errors = processNewEmployee(payload.payload);
    if (errors.length>0){
    yield put(actions.addEmployeeFormatIsNotOk(errors))
    } else{
    const employees = yield call(api.addNewEmployee, payload.payload);
    yield put(actions.addEmployeeSuccess(employees))};
  } catch (e) {
    yield put(actions.GetEmployeesFailure(e));
  }
}

function* removeEmployeeFromDb (payload: int.Payload) {
    try {
      yield call( actions.deleteEmployeeRequest, payload);
      const employees = yield call(api.deleteEmployee, payload.payload);
      yield put(actions.deleteEmployeeSuccess(employees));
    } catch (e) {
      yield put(actions.deleteEmployeeFailure(e));
    }
  }

  function* resetEmployeeDb() {
    try {
      yield call(actions.resetDbRequest);
      const employees = yield call(api.resetEmployeeDb);
      yield put(actions.resetDbSuccess(employees));
    } catch (e) {
      yield put(actions.resetDbFailure(e));
    }
  }


function* employeeSagas() {
  yield takeLatest(constants.GET_EMPLOYEES_REQUEST, getEmployeeListEffect);
  yield takeLatest(constants.ADD_EMPLOYEE_REQUEST, addEmployeeToDb);
  yield takeLatest(constants.DELETE_EMPLOYEE_REQUEST, removeEmployeeFromDb);
  yield takeLatest(constants.RESET_DATABASE_REQUEST, resetEmployeeDb);
}
export default employeeSagas;
