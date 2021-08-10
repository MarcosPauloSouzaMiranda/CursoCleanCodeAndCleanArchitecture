import Coupon from './Coupon';
import Order from './Order';

test('Não deve criar um pedido com CPF inválido', function() {
    const cpf: string = '111.111.111-11';
    expect(() => new Order(cpf, '11.111-111', 1)).toThrow(new Error('Invalid CPF'));
});

test('Deve criar um pedido com 3 itens', function() {
    const order: Order = new Order('045.364.710-30', '11.111-111', 1);
    order.addItem('1', 3.58, 3);
    order.addItem('2', 4.2, 4);
    order.addItem('3', 5.23, 2);
    expect(order.getTotalValue()).toBe(38);
});

test('Deve criar um pedido com cupon de desconto', function() {
    const order: Order = new Order('045.364.710-30', '11.111-111', 1);
    order.addItem('1', 3.58, 3);
    order.addItem('2', 4.2, 4);
    order.addItem('3', 5.23, 2);
    order.addCoupon(new Coupon('VALE10', 10, new Date('2030-01-01')));
    expect(order.getTotalValue()).toBe(34.20);
});

test('Deve calcular o valor de desconto de um pedido', function() {
    const order: Order = new Order('045.364.710-30', '11.111-111', 1);
    order.addItem('1', 3.58, 3);
    order.addItem('2', 4.2, 4);
    order.addItem('3', 5.23, 2);
    order.addCoupon(new Coupon('VALE10', 10, new Date('2030-01-01')));
    expect(order.getTotalDiscount()).toBe(3.8000000000000003);
});

test('Não deve criar um pedido com cupon de desconto expirado', function() {
    const order: Order = new Order('045.364.710-30', '11.111-111', 1);
    order.addItem('1', 3.58, 3);
    order.addItem('2', 4.2, 4);
    order.addItem('3', 5.23, 2);
    order.addCoupon(new Coupon('VALE10', 10, new Date('2020-01-01')));
    expect(order.getTotalValue()).toBe(38);
});