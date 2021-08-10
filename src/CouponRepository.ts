import Coupon from "./Coupon";

export default interface CouponRepository{
    findByTag(tag: string): Coupon | undefined;
}