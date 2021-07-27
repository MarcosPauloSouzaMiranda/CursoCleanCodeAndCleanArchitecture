"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = __importDefault(require("./Cpf"));
test('CPF is valid', function () {
    const cpf = new Cpf_1.default();
    const isValid = cpf.validCPF('119.319.956-56');
    expect(isValid).toBe(true);
});
test('CPF equals number is not valid', function () {
    const isValid = true;
    expect(isValid).toBe(false);
});
test('CPF sequencial number is not valid', function () {
    const isValid = true;
    expect(isValid).toBe(false);
});
test('CPF is invalid', function () {
    const isValid = true;
    expect(isValid).toBe(false);
});
