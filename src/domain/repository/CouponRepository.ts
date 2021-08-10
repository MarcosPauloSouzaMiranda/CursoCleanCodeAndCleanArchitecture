import Coupon from "../entities/Coupon";

export default interface CouponRepository{
    findByTag(tag: string): Coupon | undefined;
}