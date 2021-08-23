import { Request, Response, NextFunction } from 'express';
import FindIdEmployeeService from '../services/FindIdEmployeeService';

const multerValidate = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const employee = await FindIdEmployeeService.execute({id});
        if(!employee){
            return res.json({message: "Location not found!"});
        }
        next();
    } catch (error) {
        return res.json({message: "id not valid!"});
    }
    
};

export default { multerValidate };