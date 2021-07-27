"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cpf {
    constructor() { }
    extractNumbers(cpf) {
        const regex = /\d+/g;
        const parsedStatment = cpf.match(regex);
        if (!parsedStatment)
            throw 'Números CPF não encontrados!';
        return parsedStatment.join('');
    }
    validCPF(cpf) {
        cpf = this.extractNumbers(cpf);
        console.log(cpf);
        return false;
    }
}
exports.default = Cpf;
