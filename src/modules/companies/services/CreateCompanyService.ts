import { getCustomRepository } from "typeorm";
import CompaniesRepository from "@modules/companies/typeorm/repositories/CompaniesRepository"; 
import Company from "../typeorm/entities/Company";
import { ICompanyCreate } from "../interfaces/company";

export default class CreateCompanyService {
  public static async execute({ name, cnpj }: ICompanyCreate ): Promise<Company | {} > {
    const companiesRepository = getCustomRepository(CompaniesRepository);
    
    const companyExists = await companiesRepository.findByCnpj(cnpj);

    if(companyExists){
        return {message: 'company exists!'};
    }

    const company = companiesRepository.create({
        name,
        cnpj
    })

    await companiesRepository.save(company);

    return company;
  }
}
