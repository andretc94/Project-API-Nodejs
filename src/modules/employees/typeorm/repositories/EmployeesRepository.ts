import { Repository, EntityRepository } from "typeorm";
import Employee from "../entities/Employee";

@EntityRepository(Employee)
export default class UsersRepository extends Repository<Employee> {

    public async findById(id: string): Promise<Employee | undefined> {
        const employee = await this.findOne({
            where: { id }
        });
        return employee;
    }

    public async findByRegistration(registration: string): Promise<Employee | undefined> {
        const employee = await this.findOne({
            where: { registration }
        });
        return employee;
    }
}
