import Cpf from './Cpf';

test('CPF is valid', function() {
    const cpf: Cpf = new Cpf();
    const isValid: boolean = cpf.validCPF('119.319.956-56');
    expect(isValid).toBe(true);
});

test('CPF equals number is not valid', function() {
    const isValid: boolean = true;
    expect(isValid).toBe(false);
});

test('CPF sequencial number is not valid', function() {
    const isValid: boolean = true;
    expect(isValid).toBe(false);
});

test('CPF is invalid', function() {
    const isValid: boolean = true;
    expect(isValid).toBe(false);
});