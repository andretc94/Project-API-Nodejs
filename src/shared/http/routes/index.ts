import { Router } from "express";
import usersRouter from "../../../modules/users/routes/users.routes";
import employeeRoute from "@modules/employees/routes/employees.routes";
import companiesRoute from "@modules/companies/routes/companies.routes";

const router = Router();

router.use('/users', usersRouter);
router.use('/employees', employeeRoute);
router.use('/companies', companiesRoute);

export default router;
