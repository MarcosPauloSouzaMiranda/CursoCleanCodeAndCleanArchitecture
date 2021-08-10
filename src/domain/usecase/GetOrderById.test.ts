import CouponRepository from "../repository/CouponRepository";
import CouponRepositoryMemory from "../../adapters/repositories/memory/CouponRepositoryMemory";
import GetOrderById from "./GetOrderById";
import GetOrderByIdOutput from "./GetOrderByIdOutput";
import ItemRepository from "../repository/ItemRepository";
import ItemRepositoryMemory from "../../adapters/repositories/memory/ItemRepositoryMemory";
import OrderRepository from "../repository/OrderRepository";
import OrderRepositoryMemory from "../../adapters/repositories/memory/OrderRepositoryMemory";
import PlaceOrder from "./PlaceOrder";
import PlaceOrderInput from "./PlaceOrderInput";

let couponRepository: CouponRepository;
let itemRepository: ItemRepository;
let orderRepository: OrderRepository;

beforeEach(function() {
    couponRepository = new CouponRepositoryMemory();
    itemRepository = new ItemRepositoryMemory();
    orderRepository = new OrderRepositoryMemory();
});

test('Deve recuperar os dados de um pedido pelo seu id', function() {
    const inputOneOrder: PlaceOrderInput = new PlaceOrderInput({
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
    const inputTwoOrder: PlaceOrderInput = new PlaceOrderInput({
        cpf: '045.364.710-30',
        zipcode: '11.111-11',
        items: [
            {
                id: '2',
                quantity: 1
            }
        ],
        couponTag: 'VALE10'
    });
    const placeOrder: PlaceOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository);
    placeOrder.execute(inputOneOrder);
    placeOrder.execute(inputTwoOrder);
    const getOrderById: GetOrderById = new GetOrderById(orderRepository);
    const output: GetOrderByIdOutput = getOrderById.execute('202100000002');
    expect(output).toMatchObject({
        id: '202100000002',
        cpf: '04536471030',
        zipcode: '11.111-11',
        items: [
            {
                id: '2',
                price: 4.2,
                quantity: 1
            }
        ],
        discountValue: 0.42000000000000004,
        freight: 100,
        totalValue: 103.78
    })
});