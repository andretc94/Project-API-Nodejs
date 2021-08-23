import { Request, Response } from "express";
import { ICompanyCreate, ICompanyFind, ICompanyUpdate } from "../interfaces/company";
import CreateCompanyService from "../services/CreateCompanyService";
import FindCompanyService from "../services/FindCompanyService";
import ListCompaniesService from "../services/ListCompaniesService";
import UpdateCompanyService from "../services/UpdateCompanyService";

export default class CompaniesController {
    public static async list(req: Request, res: Response){
        res.json(await ListCompaniesService.execute());
    }

    public static async create(req: Request, res: Response){
        const { name, cnpj }: ICompanyCreate = req.body;
        res.json(await CreateCompanyService.execute({name, cnpj}))
    }

    public static async update(req: Request, res: Response){
        const { name, cnpj  }: ICompanyUpdate = req.body;
        const { id } = req.params;
        res.json(await UpdateCompanyService.execute({id, name, cnpj}))
    }

    public static async find(req: Request, res: Response){
        const { cnpj } = req.params;
        res.json(await FindCompanyService.execute({ cnpj }))
    }

}