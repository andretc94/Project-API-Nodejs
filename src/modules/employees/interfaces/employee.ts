interface IEmployee {
    id: string;
    name: string;
    registration: string;
    avatar: string;
    company_id: string;
    created_at: Date;
    update_at: Date;
}

interface IEmployeeCreate {
    name: string;
    registration: string;
    avatar?: string;
    company_id: string;
}

interface IEmployeeUpdate {
    id: string;
    name: string;
    registration: string;
    avatar: string;
    company_id: string;
}

interface IEmployeeFindReg {
    registration: string;
}

interface IEmployeeFindId {
    id: string;
}

export { IEmployee, IEmployeeUpdate, IEmployeeCreate, IEmployeeFindReg, IEmployeeFindId }