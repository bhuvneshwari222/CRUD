import { Iemployee } from "../models/employees";

export const employeesData: Array<Iemployee> = [
  {
    employeeID: 1,
    name: "Amit Sharma",
    age: 28,
    gender: "Male",
    position: "Software Developer",
    department: "IT",
    salary: 50000,
    email: "amit.sharma@example.com",
    phone: "9876543210",
    city: "Mumbai",
    isActive: true,
    joiningDate: "2022-03-15"
  },
  {
    employeeID: 2,
    name: "Priya Patil",
    age: 26,
    gender: "Female",
    position: "UI Designer",
    department: "Design",
    salary: 45000,
    email: "priya.patil@example.com",
    phone: "9123456780",
    city: "Pune",
    isActive: true,
    joiningDate: "2021-07-10"
  },
  {
    employeeID: 3,
    name: "Rahul Verma",
    age: 32,
    gender: "Male",
    position: "Project Manager",
    department: "Management",
    salary: 60000,
    email: "rahul.verma@example.com",
    phone: "9988776655",
    city: "Delhi",
    isActive: false,
    joiningDate: "2020-01-05"
  }
];