import { getCustomRepository } from "typeorm";
import CompaniesRepository from "../typeorm/repositories/CompaniesRepository";
import Company from "../typeorm/entities/Company";
import { ICompanyUpdate } from "../interfaces/company";

export default class UpdateEmployeeService {
  public static async execute({
    id,
    name,
    cnpj
  }: ICompanyUpdate): Promise<Company | {}> {
    try {
      const companyRepository = getCustomRepository(CompaniesRepository);
      const companyExists = await companyRepository.findById(id);
      
      if (!companyExists) {
        return { message: "Company not exists" };
      }

      const company = companyRepository.create({
        id,
        name,
        cnpj
      });

      await companyRepository.save(company);

      return company;
    } catch (error) {
      return { message: "Error, id not recognized" };
    }
  }
}
