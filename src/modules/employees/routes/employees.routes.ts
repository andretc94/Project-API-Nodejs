import { Router } from 'express';
import multer from 'multer';
import EmployeesController from '../controllers/EmployeesController';
import multerConfig from '../config/multerConfig'; '../config/multerConfig';
import multerValidate from '../middlewares/multerValidate';

const employeeRoute = Router()

const avatar = multer(multerConfig);

employeeRoute.get('/', EmployeesController.list);
employeeRoute.get('/:id', EmployeesController.findid);
employeeRoute.get('/:registration', EmployeesController.findRegistration);
employeeRoute.put('/:id', multerValidate.multerValidate, avatar.single('avatar'), EmployeesController.update);
employeeRoute.post('/', avatar.single('avatar'), EmployeesController.create);

export default employeeRoute;