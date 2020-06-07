import React, { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import * as int from "../interfaces/interfaces";
import EmployeeCard from "./EmployeeCard";

export default function Pagination(): ReactElement {
  const { employeeList, searchCriteria } = useSelector((state: any) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 7;
  const paginationThreshold = 3;

  let indexOfFirstUser,
    indexOfLastEmployees,
    renderEmployees,
    pageNumbers,
    renderPageNumbers,
    isActivePage;

  if (employeeList.length > 0) {
    let filteredEmployees = employeeList.filter(
      (employee: int.EmployeeDbEntry) => {
        if (
          employee.firstName.toLowerCase().includes(searchCriteria) ||
          employee.lastName.toLowerCase().includes(searchCriteria) ||
          employee.address.toLowerCase().includes(searchCriteria) ||
          employee.email.toLowerCase().includes(searchCriteria) ||
          employee.phoneNumber.toLowerCase().includes(searchCriteria) ||
          employee.birthDate.toLowerCase().includes(searchCriteria) ||
          employee.id === +searchCriteria
        ) {
          return employee;
        } else if (!searchCriteria) {
          return employee;
        }
      }
    );

    indexOfLastEmployees = currentPage * employeesPerPage;
    indexOfFirstUser = indexOfLastEmployees - employeesPerPage;
    renderEmployees = filteredEmployees
      .slice(indexOfFirstUser, indexOfLastEmployees)
      .map((employee: int.EmployeeDbEntry) => {
        return <EmployeeCard key={employee.id} employee={employee} />;
      });

    pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(+filteredEmployees.length / employeesPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    renderPageNumbers = pageNumbers.map((number: number) => {
      number == currentPage
        ? (isActivePage = "bg-dark text-light font-weight-bold")
        : (isActivePage = "text-secondary");
      let userLi = (
        <li
          style={{ cursor: "pointer" }}
          key={number}
          className={`py-2 px-3 ${isActivePage}`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </li>
      );
      switch (true) {
        case pageNumbers.length < 2:
          break;
        case number === 1:
          return userLi;
        case number === pageNumbers.length:
          return userLi;
        case number > currentPage - paginationThreshold &&
          number < currentPage + paginationThreshold:
          return userLi;
        case number === currentPage + paginationThreshold:
          return (
            <li className="`py-2 px-3 text-secondary pt-3" key={number}>
              ...
            </li>
          );
        case number === currentPage - paginationThreshold:
          return (
            <li className="`py-2 px-3 text-secondary" key={number}>
              ...
            </li>
          );
        default:
          break;
      }
    });
  }

  return (
    <>
      {!!employeeList && (
        <>
          <div className="h-75 overflow-auto">{renderEmployees}</div>
        </>
      )}
      <ul className="d-flex flex-row list-unstyled justify-content-center mt-2">
        {renderPageNumbers}
      </ul>
    </>
  );
}
