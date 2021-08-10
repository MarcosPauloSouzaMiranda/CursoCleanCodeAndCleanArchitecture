export default class OrderIdentity{
    public value: string;

    constructor(createdDate: Date, sequence: number) {
        this.value = this.generateIdentity(createdDate, sequence);
    }

    private generateIdentity(createdDate: Date, sequence: number): string {
        return `${createdDate.getFullYear()}${sequence.toString().padStart(8, '0')}`;
    }
}