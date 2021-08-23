import { getCustomRepository } from "typeorm";
import EmployeesRepository from "../typeorm/repositories/EmployeesRepository";
import Employee from "../typeorm/entities/Employee";

export default class ListEmployeesService {
  public static async execute(): Promise<Employee[]> {
    const employeeRepository = getCustomRepository(EmployeesRepository);
    return await employeeRepository.find();
  }
}
