import Cpf from './Cpf';

test('Não deve criar um CPF com valores repetidos', function() {
    const cpfPeopleEqualsNumber: string = '11111111111';
    expect(() => new Cpf(cpfPeopleEqualsNumber)).toThrow(new Error('Invalid CPF'));
});

test('Não deve criar um CPF com valores sequenciais', function() {
    const cpfPeople: string = '12345678910';
    expect(() => new Cpf(cpfPeople)).toThrow(new Error('Invalid CPF'));
});

test('Não deve criar um CPF com o tamanho inválido', function() {
    const cpfPeople: string = '962.817.270';
    expect(() => new Cpf(cpfPeople)).toThrow(new Error('Invalid CPF'));
});

test('Não deve criar um CPF inválido', function() {
    const cpfPeople: string = '753.329.750-41';
    expect(() => new Cpf(cpfPeople)).toThrow(new Error('Invalid CPF'));
});