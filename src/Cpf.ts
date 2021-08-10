export default class Cpf{
    private _value: string;

    constructor(cpf: string) {
        if (!this.validCPF(cpf)) throw new Error('Invalid CPF');
        this._value = this.extractNumbers(cpf);
    }

    public get value (): string{
        return this._value;
    }
    
    private extractNumbers (cpf: string): string {
        return cpf.replace(/\D/g, '');
    }

    private isAllCharacterEqual (cpf: string): boolean {
        const [firstCharacter] = cpf;
        return cpf.split('').every(digit => firstCharacter === digit);
    }

    private isSequencialNumber (cpf: string): boolean {
        const CPF_SEQUENCIAL_INVALID: string = '12345678910';
        return cpf === CPF_SEQUENCIAL_INVALID;
    }

    private isNumberCharacterValid (cpf: string): boolean {
        const CPF_LENGTH_VALID: number = 11;
        return cpf.length === CPF_LENGTH_VALID;
    }

    private extractBaseCPF (cpf: string): string {
        const NUMBER_DIGIT_BASE_CPF: number = 9;
        return cpf.substr(0, NUMBER_DIGIT_BASE_CPF);
    }

    private calculateVerificationDigit (cpf: string, factor: number, max: number): string{
        const FACTOR_DIVISION_VERIFICATION_NUMBER = 11;
        const FACTOR_VERIFICATION_DIGIT_FOR_ZERO = 2;
        cpf = cpf.substr(0, max);
        const sumCalculate: number = cpf
            .split('')
            .map((character: string) => parseInt(character))
            .reduce((total: number, digit: number) => {
                total += digit * factor;
                factor--;
                return total;
            }, 0);
        let restCalculation: number = sumCalculate % FACTOR_DIVISION_VERIFICATION_NUMBER;
        if (restCalculation < FACTOR_VERIFICATION_DIGIT_FOR_ZERO) return '0';
        let verificationDigit: number = FACTOR_DIVISION_VERIFICATION_NUMBER - restCalculation;
        return verificationDigit.toString();
    }

    public validCPF (cpf: string): boolean {
        cpf = this.extractNumbers(cpf);
        if (this.isAllCharacterEqual(cpf)) return false;
        if (this.isSequencialNumber(cpf)) return false;
        if (!this.isNumberCharacterValid(cpf)) return false;
        const firstCheckDigit: string = this.calculateVerificationDigit(cpf, 10, 9);
        const secondCheckDigit: string = this.calculateVerificationDigit(cpf, 11, 10);
        const baseCPF: string = this.extractBaseCPF(cpf);
        const CPFValidator: string = baseCPF + firstCheckDigit + secondCheckDigit;
        return cpf === CPFValidator;
    }
}