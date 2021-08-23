import { getCustomRepository } from "typeorm";
import CompaniesRepository from "../typeorm/repositories/CompaniesRepository";
import Company from "../typeorm/entities/Company";

export default class ListEmployeesService {
  public static async execute(): Promise<Company[]> {
    const companyRepository = getCustomRepository(CompaniesRepository);
    return await companyRepository.find();
  }
}
