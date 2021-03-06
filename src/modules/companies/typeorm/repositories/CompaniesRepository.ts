import { Repository, EntityRepository } from "typeorm";
import Company from "../entities/Company";

@EntityRepository(Company)
export default class CompaniesRepository extends Repository<Company> {
    public async findByCnpj(cnpj: string): Promise<Company | undefined> {
        const company = await this.findOne({
            where: { cnpj }
        });
        return company;
    }

    public async findById(id: string): Promise<Company | undefined> {
        const company = await this.findOne({
            where: { id }
        });
        return company;
    }
}
