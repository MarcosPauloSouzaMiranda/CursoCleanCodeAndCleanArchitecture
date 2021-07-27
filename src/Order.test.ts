import Order from './Order';
import OrderItem from './OrderItem';

test('order has minimum of 3 items', function() {
    const MIN_ITEMS_ORDER: number = 3;
    const itemOne: OrderItem = new OrderItem('Manteiga', 3.58, 3);
    const itemTwo: OrderItem = new OrderItem('Leite em Pó', 4.2, 4);
    const itemThree: OrderItem = new OrderItem('Leite Condensado', 5.23, 2);
    const order: Order = new Order('Marcos Paulo Souza Miranda', 3, [itemOne, itemTwo, itemThree]);
    const totalItemsOrder: number = order.items.length;
    expect(totalItemsOrder).toBeGreaterThanOrEqual(MIN_ITEMS_ORDER);
});

test('order with discount', function() {
    const itemOne: OrderItem = new OrderItem('Manteiga', 3.58, 3);
    const itemTwo: OrderItem = new OrderItem('Leite em Pó', 4.2, 4);
    const itemThree: OrderItem = new OrderItem('Leite Condensado', 5.23, 2);
    const order: Order = new Order('Marcos Paulo Souza Miranda', 3, [itemOne, itemTwo, itemThree]);
    const totalDiscount: number = order.totalDiscount;
    expect(totalDiscount).toBeGreaterThan(0);
});

