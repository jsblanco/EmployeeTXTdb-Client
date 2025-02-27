export interface Employee extends Object {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  birthDate: string;
}

export interface EmployeeDbEntry extends Employee {
  id: number;
}

export interface EmployeeArr extends Array<Object> {
  [index: number]: Employee;
}

interface EventInt extends Object {
  name: string,
  value: string
}

export interface Payload {
  type?: string;
  payload?: EmployeeArr | Error | Number | Employee | Boolean | EventInt;
}


