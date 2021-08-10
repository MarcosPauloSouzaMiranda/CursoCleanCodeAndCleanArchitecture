export default class GetOrderByIdOutput{
    public id: string | undefined;
    public cpf: string;
    public zipcode: string;
    public items: any[];
    public discountValue: number;
    public freight: number;
    public totalValue: number;

    constructor({ id, cpf, zipcode, items, discountValue, freight, totalValue }: { id: string, cpf: string, zipcode: string, items: any[], discountValue: number, freight: number, totalValue: number }) {
        this.id = id;
        this.cpf = cpf;
        this.zipcode = zipcode;
        this.items = items;
        this.discountValue = discountValue;
        this.freight = freight;
        this.totalValue = totalValue;
    }
}