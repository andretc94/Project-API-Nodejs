import { getCustomRepository } from "typeorm";
import EmployeesRepository from "../typeorm/repositories/EmployeesRepository";
import Employee from "../typeorm/entities/Employee";
import { IEmployeeFindId } from "../interfaces/employee";

export default class FindIdEmployeeService {
  public static async execute({ id }: IEmployeeFindId): Promise<Employee | undefined | {}> {
    try {
      const employeeRepository = getCustomRepository(EmployeesRepository);
      const employee = await employeeRepository.findById(id);
      return employee;
    } catch (error) {
      return { message: "Employee not found!" };
    }
  }
}
