export default class PlaceOrderInput{
    public cpf: string;
    public zipcode: string;
    public items: any[];
    public couponTag: string;
    constructor({ cpf, zipcode, items, couponTag }: { cpf: string, zipcode: string, items: any[], couponTag: string }) {
        this.cpf = cpf;
        this.zipcode = zipcode;
        this.items = items;
        this.couponTag = couponTag;
    }
}