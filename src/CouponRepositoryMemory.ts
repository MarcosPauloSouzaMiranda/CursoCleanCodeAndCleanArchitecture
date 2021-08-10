import Coupon from "./Coupon";
import CouponRepository from "./CouponRepository";

export default class CouponRepositoryMemory implements CouponRepository{
    private coupons: Coupon[];

    constructor() {
        this.coupons = [
            new Coupon('VALE10', 10, new Date('2021-12-01')),
            new Coupon('VALE20', 10, new Date('2020-01-01'))
        ];
    }

    public findByTag(tag: string): Coupon | undefined {
        return this.coupons.find(coupon => coupon.tag === tag);
    }
}