import Coupon from "./Coupon";
import Cpf from "./Cpf";
import OrderIdentity from "./OrderIdentity";
import OrderItem from "./OrderItem";

export default class Order{
    public identity: OrderIdentity;
    private _cpf: Cpf;
    public items: OrderItem[] = [];
    public coupon: Coupon | undefined;
    public freight: number = 0;
    public zipcode: string;
    public sequence: number;
    public createdDate: Date;

    constructor(cpf: string, zipcode: string, sequence: number) {
        this._cpf = new Cpf(cpf);
        this.zipcode = zipcode;
        this.sequence = sequence;
        this.createdDate = new Date();
        this.identity = new OrderIdentity(this.createdDate, this.sequence);
    }

    public get cpf(): string {
        return this._cpf.value;
    }

    private getGrossTotalValue(): number {
        return this.items.reduce((totalValue: number, item: OrderItem) => totalValue + item.totalValue, 0);
    }

    public getTotalValue(): number {
        let totalValue: number = this.getGrossTotalValue();
        if (this.coupon) totalValue -= (totalValue * (this.coupon.percentDiscount / 100));
        totalValue += this.freight;
        return totalValue;
    }

    public getTotalDiscount(): number {
        if (!this.coupon) return 0;
        const grossTotalValue: number = this.getGrossTotalValue();
        return grossTotalValue * (this.coupon.percentDiscount / 100);
    }

    private _searchIndexItem(id: string): number {
        const index: number = this.items.findIndex((itemIndex: OrderItem) => itemIndex.id === id);
        return index;
    }

    public addItem(id: string, price: number, quantity: number): void {
        let index: number = this._searchIndexItem(id);
        if (index >= 0) throw `Then item ${id} exists in the order!`;
        this.items.push(new OrderItem(id, price, quantity));
    }

    public removeItem(id: string): void {
        let index: number = this._searchIndexItem(id);
        if (index < 0) throw `The item ${id} not search in the order!`;
        this.items.splice(index, 1);
    }

    public addCoupon(coupon: Coupon): void{
        if (!coupon.isExpired()) this.coupon = coupon;
    }
}