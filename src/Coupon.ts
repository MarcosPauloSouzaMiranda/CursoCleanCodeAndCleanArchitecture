export default class Coupon{
    public tag: string = '';
    public _percentDiscount: number = 0;
    public expireDate: Date;

    constructor(tag: string, percentDiscount: number, expireDate: Date) {
        this.tag = tag;
        this.percentDiscount = percentDiscount;
        this.expireDate = expireDate;
    }

    public set percentDiscount(percentDiscount: number) {
        if (percentDiscount <= 0) throw new Error('Percent discount inválid!');
        this._percentDiscount = percentDiscount;
    }

    public get percentDiscount(): number{
        return this._percentDiscount;
    }

    public isExpired(): boolean {
        const today: Date = new Date();
        return this.expireDate.getTime() < today.getTime();
    }
}