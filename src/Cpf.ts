export default class Cpf{
    
    constructor() {}
    
    private extractNumbers (cpf : string): string {
        const regex = /\d+/g
        const parsedStatment: (RegExpMatchArray | null) = cpf.match(regex);
        if (!parsedStatment) throw 'Números CPF não encontrados!';
        return parsedStatment.join('');
    }

    public validCPF (cpf : string): boolean {
        cpf = this.extractNumbers(cpf);
        console.log(cpf);
        return false;
    }
}