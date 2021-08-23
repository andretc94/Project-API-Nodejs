import { getCustomRepository } from "typeorm";
import CompaniesRepository from "../typeorm/repositories/CompaniesRepository";
import Company from "../typeorm/entities/Company";
import { ICompanyFind } from "../interfaces/company";

export default class FindCompanyService {
  public static async execute({ cnpj }: ICompanyFind): Promise<Company | undefined | {}> {
    try {
      const companiesRepository = getCustomRepository(CompaniesRepository);
      const company = await companiesRepository.findByCnpj(cnpj);
      if(!company){
        return {message: 'Not found company'};
      }
      return company;
    } catch (error) {
      return { message: "Error" };
    }
  }
}
