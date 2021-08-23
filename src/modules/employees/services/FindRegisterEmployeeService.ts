import { getCustomRepository } from "typeorm";
import EmployeesRepository from "../typeorm/repositories/EmployeesRepository";
import Employee from "../typeorm/entities/Employee";
import { IEmployeeFindReg } from "../interfaces/employee";

export default class FindRegisterEmployeeService {
  public static async execute({ registration }: IEmployeeFindReg): Promise<Employee | undefined | {}> {
    try {
      const employeeRepository = getCustomRepository(EmployeesRepository);
      const employee = await employeeRepository.findByRegistration(registration);
      return employee;
    } catch (error) {
      return { message: "Employee not found!" };
    }
  }
}
