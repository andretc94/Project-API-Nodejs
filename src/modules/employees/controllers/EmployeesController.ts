import { Request, Response } from "express";
import { IEmployeeCreate, IEmployeeUpdate } from "../interfaces/employee";
import CreateEmployeeService from "../services/CreateEmployeeService";
import FindIdEmployeeService from "../services/FindIdEmployeeService";
import FindRegisterEmployeeService from "../services/FindRegisterEmployeeService";
import ListEmployeesService from "../services/ListEmployeesService";
import UpdateEmployeeService from "../services/UpdateEmployeeService";

export default class EmployeesController {
    public static async list(req: Request, res: Response){
        res.json(await ListEmployeesService.execute());
    }

    public static async create(req: Request, res: Response){
        const { name, registration, company_id }: IEmployeeCreate = req.body;
        const avatar  = req.file?.filename;

        res.json(await CreateEmployeeService.execute({name, registration, company_id, avatar}))
    }

    public static async update(req: Request, res: Response){
        const { name, registration, company_id, avatar }: IEmployeeUpdate = req.body;
        const { id } = req.params;
        res.json(await UpdateEmployeeService.execute({id, name, registration, company_id, avatar}))
    }

    public static async findRegistration(req: Request, res: Response){
        const { registration } = req.params;
        res.json(await FindRegisterEmployeeService.execute({registration}))
    }

    public static async findid(req: Request, res: Response){
        const { id } = req.params;
        res.json(await FindIdEmployeeService.execute({id}))
    }

}