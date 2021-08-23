import { Router } from "express";
import UsersController from "../controllers/UsersController";

const routerUsers = Router();

routerUsers.get("/", UsersController.index);
routerUsers.get("/:id", UsersController.find);
routerUsers.post("/", UsersController.create);
routerUsers.put("/:id", UsersController.update);

export default routerUsers;
