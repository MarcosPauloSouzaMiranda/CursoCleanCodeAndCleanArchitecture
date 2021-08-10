export default class OrderIdentity{
    public value: string;

    constructor(totalOrders: number) {
        this.value = this.generateIdentity(totalOrders);
    }

    private getNextSequencialNumber(totalOrders: number): number {
        if (totalOrders <= 0) return 1;
        totalOrders++;
        return totalOrders;
    }

    private generateIdentity(totalOrders: number): string {
        const today: Date = new Date();
        const sequencialNumber: number = this.getNextSequencialNumber(totalOrders);
        return `${today.getFullYear()}${sequencialNumber.toString().padStart(8, '0')}`;
    }
}