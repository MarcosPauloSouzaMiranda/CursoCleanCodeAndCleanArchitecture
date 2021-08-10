import GetOrderByIdOutput from "./GetOrderByIdOutput";
import Order from "./Order";
import OrderRepository from "./OrderRepository";

export default class GetOrderById{
    private orderRepository: OrderRepository;
    
    constructor(orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    public execute(id: string): GetOrderByIdOutput {
        const order: Order = this.orderRepository.getById(id);
        return {
            id: order.identity?.value,
            cpf: order.cpf,
            zipcode: order.zipcode,
            items: order.items.map(item => {
                return {
                    id: item.id,
                    price: item.price,
                    quantity: item.quantity
                }
            }),
            discountValue: order.getTotalDiscount(),
            freight: order.freight,
            totalValue: order.getTotalValue()
        }
    }
}