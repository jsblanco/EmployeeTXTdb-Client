import * as int from "./../interfaces/interfaces";

export const processNewEmployee = (
  newEmployee: int.Employee
): Array<string> => {
  const errors = [];
  console.log(newEmployee);

  if (
    typeof newEmployee.firstName !== "string" ||
    newEmployee.firstName.length == 0
  ) {
    errors.push(
      "Please input a valid first name in the following format: Firstname"
    );
  }
  if (
    typeof newEmployee.lastName !== "string" ||
    newEmployee.lastName.length == 0
  ) {
    errors.push(
      "Please input a valid last name, in the following format: Lastname"
    );
  }
  if (
    typeof newEmployee.address !== "string" ||
    newEmployee.address.length == 0
  ) {
    errors.push("Please input a valid address");
  }
  if (
    typeof newEmployee.email !== "string" ||
    newEmployee.email.length == 0 ||
    !/^[^@]+@[^@]+\.[^@]+$/.test(newEmployee.email)
  ) {
    errors.push(
      "Please input a valid email address, in the following format: abc@abcde.abc"
    );
  }
  if (
    typeof newEmployee.phoneNumber !== "string" ||
    newEmployee.phoneNumber.length == 0 ||
    !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(
      newEmployee.phoneNumber
    )
  ) {
    errors.push(
      "Please input a valid phone number, in the following format: 123-123-1234"
    );
  }
  if (
    typeof newEmployee.birthDate !== "string" ||
    newEmployee.birthDate.length == 0
  ) {
    errors.push("Please input a valid birth date");
  }

  return errors;
};

const namePattern = "[A-Z][a-z]{1,32}";
