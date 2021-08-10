import Coupon from "./Coupon";

test('Deve verificar se o cupom está expirado', function() {
    const coupon: Coupon = new Coupon('VALE10', 10, new Date('2020-08-09'));
    expect(coupon.isExpired()).toBe(true);
});