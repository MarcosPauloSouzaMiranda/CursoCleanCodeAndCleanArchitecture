export default class PlaceOrderOutput{
    public freight: number;
    public totalValue: number;
    
    constructor({ freight, totalValue }: { freight: number, totalValue: number }) {
        this.freight = freight;
        this.totalValue = totalValue;
    }
}