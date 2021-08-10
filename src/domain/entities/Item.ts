export default class Item{
    public id: string;
    public name: string;
    public price: number;
    public width: number;
    public height: number;
    public length: number;
    public weight: number;

    constructor(id: string, name: string, price: number, width: number, height: number, length: number, weight: number) {
        this.id     = id;
        this.name   = name;
        this.price  = price;
        this.width  = width;
        this.height = height;
        this.length = length;
        this.weight = weight;
    }

    public getVolume(): number {
        const BASE_CM: number = 100;
        return (this.width / BASE_CM) * (this.height / BASE_CM) * (this.length / BASE_CM);
    }

    public getDensity(): number {
        return this.weight / this.getVolume();
    }
}