import CouponRepository from "../repository/CouponRepository";
import CouponRepositoryMemory from "../../adapters/repositories/memory/CouponRepositoryMemory";
import ItemRepository from "../repository/ItemRepository";
import ItemRepositoryMemory from "../../adapters/repositories/memory/ItemRepositoryMemory";
import OrderRepository from "../repository/OrderRepository";
import OrderRepositoryMemory from "../../adapters/repositories/memory/OrderRepositoryMemory";
import PlaceOrder from "./PlaceOrder";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlacerOderOutput";

let couponRepository: CouponRepository;
let itemRepository: ItemRepository;
let orderRepository: OrderRepository;

beforeAll(function() {
    couponRepository = new CouponRepositoryMemory();
    itemRepository = new ItemRepositoryMemory();
    orderRepository = new OrderRepositoryMemory();
});

test('Deve fazer um pedido', function() {
    const input: PlaceOrderInput = new PlaceOrderInput({
        cpf: '045.364.710-30',
        zipcode: '11.111-11',
        items: [
            {
                id: '1',
                quantity: 3
            }
        ],
        couponTag: 'VALE10'
    });

    const placeOrder: PlaceOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository);
    const output: PlaceOrderOutput = placeOrder.execute(input);
    expect(output.totalValue).toBe(39.666);
});

test('Deve fazer um pedido com cupom de desconto expirado', function() {
    const input: PlaceOrderInput = new PlaceOrderInput({
        cpf: '045.364.710-30',
        zipcode: '11.111-11',
        items: [
            {
                id: '1',
                quantity: 3
            }
        ],
        couponTag: 'VALE20'
    });
    const placeOrder: PlaceOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository);
    const output: PlaceOrderOutput = placeOrder.execute(input);
    expect(output.totalValue).toBe(40.74);
});
test('Deve fazer um pedido com cálculo de frete', function() {
    const input: PlaceOrderInput = new PlaceOrderInput({
        cpf: '045.364.710-30',
        zipcode: '11.111-11',
        items: [
            {
                id: '1',
                quantity: 3
            }
        ],
        couponTag: 'VALE20'
    });
    const placeOrder: PlaceOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository);
    const output: PlaceOrderOutput = placeOrder.execute(input);
    expect(output.freight).toBe(30);
});