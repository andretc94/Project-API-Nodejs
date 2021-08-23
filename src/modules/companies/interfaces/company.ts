interface ICompany {
    id: string;
    name: string;
    cnpj: string;
    created_at: Date;
    update_at: Date;
}

interface ICompanyCreate {
    name: string;
    cnpj: string;
}

interface ICompanyUpdate {
    id: string;
    name: string;
    cnpj: string;
}

interface ICompanyFind {
    cnpj: string;
}



export {ICompany, ICompanyFind, ICompanyUpdate, ICompanyCreate}