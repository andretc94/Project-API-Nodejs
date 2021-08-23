import { getCustomRepository } from "typeorm";
import EmployeesRepository from "../typeorm/repositories/EmployeesRepository";
import CompaniesRepository from "@modules/companies/typeorm/repositories/CompaniesRepository"; 
import Employee from "../typeorm/entities/Employee";
import { IEmployeeCreate } from "../interfaces/employee";

export default class CreateEmployeeService {
  public static async execute({name, registration, avatar, company_id}: IEmployeeCreate ): Promise<Employee | {} > {
    try {
      const companiesRepository = getCustomRepository(CompaniesRepository);
    
    const companyExists = await companiesRepository.findById(company_id);

    if(!companyExists){
        return {message: 'company not exists!'};
    }
    } catch (error) {
      return {message: 'Error: id company not recognized!'};
    }
    
    const employeeRepository = getCustomRepository(EmployeesRepository);

    const userExists = await employeeRepository.findByRegistration(registration);
    
    if(userExists){
        return {message: 'User Exists!'};
    }

    const employee = employeeRepository.create({
        name,
        registration,
        avatar,
        company_id
    })

    await employeeRepository.save(employee);

    return employee;
  }
}
