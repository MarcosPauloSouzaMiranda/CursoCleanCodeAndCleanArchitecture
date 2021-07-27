export default class Cpf{
    
    constructor() {}
    
    private extractNumbers (cpf: string): string {
        const regex = /\d+/g
        const parsedStatment: (RegExpMatchArray | null) = cpf.match(regex);
        if (!parsedStatment) throw 'Números CPF não encontrados!';
        return parsedStatment.join('');
    }

    private isAllCharacterEqual (cpf: string): boolean {
        const firstCharacter: string = cpf.substr(0, 1);
        let isEqual: boolean = true;
        for(let char of cpf) {
            if (firstCharacter !== char) isEqual = false;
        }       
        return isEqual;
    }

    private isSequencialNumber (cpf: string): boolean {
        const CPF_SEQUENCIAL_INVALID: string = '12345678910';
        if (cpf == CPF_SEQUENCIAL_INVALID) return true;
        return false;
    }

    private isNumberCharacterValid (cpf: string): boolean {
        const CPF_LENGTH_VALID: number = 11;
        if (cpf.length === CPF_LENGTH_VALID) return true;
        return false;
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

    public validCPF (cpf : string): boolean {
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