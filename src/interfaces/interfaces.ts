export interface Employee extends Object {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  birthDate: string;
}

export interface EmployeeArr extends Array<Object> {
  [index: number]: Employee;
}

export interface Payload {
  type: string;
  payload?: EmployeeArr | Error | Number |Employee;
}
