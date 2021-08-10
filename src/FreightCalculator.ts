import Item from "./Item";

export default class FreightCalculator{
    public static calculate(distance: number, item: Item): number {
        const FATOR_DESITY: number = 100;
        const MIN_PRICE_FREIGHT: number = 10;
        const price: number = distance * item.getVolume() * (item.getDensity() / FATOR_DESITY);
        if (price < MIN_PRICE_FREIGHT) return MIN_PRICE_FREIGHT;
        return price;
    }
}