import { getCustomRepository } from "typeorm";
import EmployeesRepository from "../typeorm/repositories/EmployeesRepository";
import Employee from "../typeorm/entities/Employee";
import { IEmployeeUpdate } from "../interfaces/employee";

export default class UpdateEmployeeService {
  public static async execute({
    id,
    name,
    avatar,
    company_id,
    registration
  }: IEmployeeUpdate): Promise<Employee | {}> {
    try {
      const employeeRepository = getCustomRepository(EmployeesRepository);
      const employeeExists = await employeeRepository.findById(id);
      
      if (!employeeExists) {
        return { message: "Employee not exists" };
      }

      const employee = employeeRepository.create({
        id,
        name,
        avatar,
        company_id,
        registration
      });

      await employeeRepository.save(employee);

      return employee;
    } catch (error) {
      return { message: "Error" };
    }
  }
}
