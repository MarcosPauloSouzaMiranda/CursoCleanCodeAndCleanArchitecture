export default class OrderItem{
    public id: string;
    private _price: number = 0;
    private _quantity: number = 0;

    constructor (id: string, price: number, quantity: number) {
        this.id =  id;
        this.price = price;
        this.quantity = quantity;
    }


    public set price (price: number) {
        if (price <= 0) throw 'O preço não pode ser menor ou igual a zero!';
        this._price = price;
    }

    public get price (): number {
        return this._price;
    }

    public set quantity (quantity: number) {
        if (quantity <= 0) throw 'A quantidade não pode ser menor ou igual a zero!';
        this._quantity = quantity;
    }

    public get quantity (): number{
        return this._quantity;
    }

    public get totalValue (): number {
        return this._quantity * this._price;
    }
}