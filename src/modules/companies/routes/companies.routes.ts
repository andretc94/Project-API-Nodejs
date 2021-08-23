import { Router } from 'express';
import CompaniesController from '../controllers/CompaniesController';


const companiesRoute = Router()

companiesRoute.get('/', CompaniesController.list);
companiesRoute.get('/:cnpj', CompaniesController.find);
companiesRoute.put('/:id', CompaniesController.update);
companiesRoute.post('/', CompaniesController.create);

export default companiesRoute;