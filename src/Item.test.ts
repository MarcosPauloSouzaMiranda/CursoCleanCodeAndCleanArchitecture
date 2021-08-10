import Item from "./Item";

test('Deve calcular o volume de um item', function() {
    const item: Item = new Item('1', 'Manteiga', 3.58, 20, 15, 10, 0.5);
    expect(item.getVolume()).toBe(0.003);
});

test('Deve calcular a densidade de um item', function() {
    const item: Item = new Item('1', 'Manteiga', 3.58, 20, 15, 10, 0.5);
    expect(item.getDensity()).toBe(166.66666666666666);
})