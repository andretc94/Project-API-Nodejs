import { Request, Response } from "express";
import { IUserCreate } from "../interfaces/users";
import CreateUserService from "../services/CreateUserService";
import ListUsersService from "../services/ListUsersService";
import UpdateUserService from "../services/UpdateUserService";
import FindUserService from "../services/FindUserService";

export default class UsersController {
  public static async index(req: Request, res: Response): Promise<Response> {
    return res.json(await ListUsersService.execute());
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password }: IUserCreate = req.body;
    return res.json(await CreateUserService.execute({ name, password, email }));
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    const { name, email, password }: IUserCreate = req.body;
    const { id } = req.params;
    return res.json(await UpdateUserService.execute({ id, name, password, email }));
  }

  public static async find(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    return res.json(await FindUserService.execute({ id }));
  }
}
