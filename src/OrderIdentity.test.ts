import OrderIdentity from "./OrderIdentity";

test('Deve gerar o código do pedido', function() {
    const orderIdentity: OrderIdentity = new OrderIdentity(new Date('2021-08-09'), 1);
    expect(orderIdentity.value).toBe('202100000001');
});