import Cpf from './Cpf';

test('CPF equals number is not valid', function() {
    const cpfPeopleEqualsNumber: string = '11111111111';
    const cpf: Cpf = new Cpf();
    const isValid: boolean = cpf.validCPF(cpfPeopleEqualsNumber);
    expect(isValid).toBe(false);
});

test('CPF sequencial number is not valid', function() {
    const cpfPeople: string = '12345678910';
    const cpf: Cpf = new Cpf();
    const isValid: boolean = cpf.validCPF(cpfPeople);
    expect(isValid).toBe(false);
});

test('CPF with length is not valid', function() {
    const cpfPeople: string = '962.817.270';
    const cpf: Cpf = new Cpf();
    const isValid: boolean = cpf.validCPF(cpfPeople);
    expect(isValid).toBe(false);
});

test('CPF is valid', function() {
    const cpfPeople: string = '962.817.270-02';
    const cpf: Cpf = new Cpf();
    const isValid: boolean = cpf.validCPF(cpfPeople);
    expect(isValid).toBe(true);
});

test('CPF is invalid', function() {
    const cpfPeople: string = '753.329.750-41';
    const cpf: Cpf = new Cpf();
    const isValid: boolean = cpf.validCPF(cpfPeople);
    expect(isValid).toBe(false);
});