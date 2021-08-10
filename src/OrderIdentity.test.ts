import OrderIdentity from "./OrderIdentity";

test('Deve gerar o código do pedido', function() {
    const orderIdentity: OrderIdentity = new OrderIdentity(0);
    expect(orderIdentity.value).toBe('202100000001');
});