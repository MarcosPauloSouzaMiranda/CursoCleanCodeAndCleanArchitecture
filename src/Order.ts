import OrderItem from "./OrderItem";

export default class Order{
    private _namePeople: string = '';
    private _percentDiscount: number = 0;
    private _items: OrderItem[] = [];

    constructor (namePeople: string, percentDiscount: number, items: OrderItem[]) {
        this.namePeople = namePeople;
        this.percentDiscount = percentDiscount;
        items.forEach((item: OrderItem) => this.addItem(item));
    }

    public set namePeople (namePeople: string) {
        const MIN_LENGTH_NAMEPEOPLE = 3;
        namePeople = namePeople.trim();
        if (!namePeople) throw 'O nome do comprador é obrigatório!';
        if (namePeople.length < MIN_LENGTH_NAMEPEOPLE) throw `O nome do comprador deve conter no mínimo ${MIN_LENGTH_NAMEPEOPLE} caracteres!`;
        this._namePeople = namePeople;
    }

    public get namePeople (): string {
        return this._namePeople;
    }

    public set percentDiscount (percentDiscount: number) {
        if (percentDiscount <= 0) throw 'O percentual de desconto precisa ser maior que zero!';
        this._percentDiscount = percentDiscount;
    }

    public get percentDiscount (): number {
        return this._percentDiscount;
    }

    public get items (): OrderItem[] {
        return this._items;
    }

    private _calculateTotalValueItems (): number {
        return this._items.reduce((totalValue: number, item: OrderItem) => totalValue + item.totalValue, 0);
    }

    public get totalValue(): number{
        let totalValueItems: number = this._calculateTotalValueItems();
        return totalValueItems - this.totalDiscount;
    }

    public get totalDiscount(): number {
        let totalValueItems: number = this._calculateTotalValueItems();
        return totalValueItems * (this._percentDiscount / 100);
    }

    private _searchIndexItem(item: OrderItem): number{
        const index: number = this._items.findIndex((itemIndex: OrderItem) => itemIndex.description === item.description);
        return index;
    }

    public addItem (item: OrderItem): void {
        let index: number = this._searchIndexItem(item);
        if (index >= 0) throw `O item ${item.description} já existe no pedido!`;
        this._items.push(item);
    }

    public removeItem (item: OrderItem): void {
        let index: number = this._searchIndexItem(item);
        if (index < 0) throw `O item ${item.description} não foi encontrado no pedido!`;
        this._items.splice(index, 1);
    }
}