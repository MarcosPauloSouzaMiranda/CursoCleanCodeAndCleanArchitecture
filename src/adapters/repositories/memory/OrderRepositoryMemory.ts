import Order from "../../../domain/entities/Order";
import OrderIdentity from "../../../domain/entities/OrderIdentity";
import OrderRepository from "../../../domain/repository/OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository{
    private orders: Order[] = [];

    public count(): number {
        return this.orders.length;
    }

    public add(order: Order): void {
        this.orders.push(order);
    }

    public getById(id: string): Order{
        const orderSearch: Order | undefined = this.orders.find(order => order.identity?.value === id);
        if (!orderSearch) throw new Error('Order not found');
        return orderSearch;
    }
}