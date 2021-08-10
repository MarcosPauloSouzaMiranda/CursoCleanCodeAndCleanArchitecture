import FreightCalculator from "./FreightCalculator";
import Item from "./Item";

test('Deve se calcular o frete da manteiga', function() {
    const item: Item = new Item('1', 'Manteiga', 3.58, 20, 15, 10, 10);
    const distance: number = 1000;
    const price: number = FreightCalculator.calculate(distance, item);
    expect(price).toBe(100);
});

test('Deve se calcular o frete do Leite em Pó', function() {
    const item: Item = new Item('2', 'Leite em Pó', 4.20, 50, 50, 50, 10);
    const distance: number = 1000;
    const price: number = FreightCalculator.calculate(distance, item);
    expect(price).toBe(100);
});

test('Deve se calcular o frete do Leite condensado', function() {
    const item: Item = new Item('3', 'Leite condensado', 5.23, 50, 50, 50, 0.2);
    const distance: number = 1000;
    const price: number = FreightCalculator.calculate(distance, item);
    expect(price).toBe(10);
});