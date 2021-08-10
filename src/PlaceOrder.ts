import Coupon from "./Coupon";
import CouponRepository from "./CouponRepository";
import FreightCalculator from "./FreightCalculator";
import Item from "./Item";
import ItemRepository from "./ItemRepository";
import Order from "./Order"
import OrderRepository from "./OrderRepository";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlacerOderOutput";
import ZipcodeCalculatorAPI from "./ZipcodeCalculatorAPI";
import ZipcodeCalculatorMemory from "./ZipcodeCalculatorMemory";

export default class PlaceOrder{
    private itemRepository: ItemRepository;
    private couponRepository: CouponRepository;
    private orderRepository: OrderRepository;
    private zipcodeCalculator: ZipcodeCalculatorAPI;
    
    constructor(itemRepository: ItemRepository, couponRepository: CouponRepository, orderRepository: OrderRepository) {
        this.itemRepository = itemRepository;
        this.couponRepository = couponRepository;
        this.orderRepository = orderRepository;
        this.zipcodeCalculator = new ZipcodeCalculatorMemory();
    }

    public execute(input: PlaceOrderInput): PlaceOrderOutput {
        const sequence: number = this.orderRepository.count() + 1;
        const order: Order = new Order(input.cpf, input.zipcode, sequence);
        const distance: number = this.zipcodeCalculator.calculate('11.111-11', input.zipcode);
        input.items.forEach((item : any) => {
            const itemSearch: Item = this.itemRepository.findById(item.id);
            order.addItem(item.id, itemSearch.price, item.quantity);
            order.freight += item.quantity * FreightCalculator.calculate(distance, itemSearch);
        });
        const couponSearch: Coupon | undefined = this.couponRepository.findByTag(input.couponTag);
        if (couponSearch) order.addCoupon(couponSearch);
        this.orderRepository.add(order);
        return {
            freight: order.freight,
            totalValue: order.getTotalValue()
        }
    }
}