import ZipcodeCalculatorAPI from "./ZipcodeCalculatorAPI";
import ZipcodeCalculatorMemory from "./ZipcodeCalculatorMemory";

test('Deve calcular a distância entre dois ceps', function() {
    const zipcodeCalculator: ZipcodeCalculatorAPI = new ZipcodeCalculatorMemory();
    const distance: number = zipcodeCalculator.calculate('11.111-111', '22.222-222');
    expect(distance).toBe(1000);
});