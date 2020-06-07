import { axiosInstance } from "./instance/axios-instance";
import * as int from "../interfaces/interfaces"


export const getEmployees = () => {
  return axiosInstance.get("/");
};

export const addNewEmployee = (data: int.Employee) => {
  return axiosInstance.post("/add-employee", { data });
};

export const deleteEmployee = (userId: number) => {
  return axiosInstance.delete(`/delete-employee/${userId}`);
};

export const resetEmployeeDb = () => {
  return axiosInstance.put(`/reset`);
};
