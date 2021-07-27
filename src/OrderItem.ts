export default class OrderItem{
    private _description: string = '';
    private _price: number = 0;
    private _quantity: number = 0;

    constructor (description: string, price: number, quantity: number) {
        this.description =  description;
        this.price = price;
        this.quantity = quantity;
    }

    public set description (description: string) {
        const MIN_LENGTH_DESCRIPTION = 3;
        description = description.trim();
        if (!description) throw 'Descrição do item é um campo obrigatório!';
        if (description.length < MIN_LENGTH_DESCRIPTION) throw `Descrição deve conter no mínimo ${MIN_LENGTH_DESCRIPTION} caracteres!`;
        this._description = description;
    }

    public get description (): string {
        return this._description;
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