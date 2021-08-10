import Order from "./Order";

export default interface OrderRepository{
    count(): number;
    add(order: Order): void;
    getById(id: string): Order;
}