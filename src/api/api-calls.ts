import { axiosInstance } from "./instance/axios-instance";
import * as int from "../interfaces/interfaces"


export const getEmployees = ():any => {
  return axiosInstance.get("/");
};

export const addNewEmployee:any = (data: int.Employee) => {
  return axiosInstance.post("/add-employee", { data });
};

export const deleteEmployee = (userId: number):any => {
  return axiosInstance.delete(`/delete-employee/${userId}`);
};

export const resetEmployeeDb = ():any => {
  return axiosInstance.put(`/reset`);
};
