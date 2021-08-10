import ZipcodeCalculatorAPI from "./ZipcodeCalculatorAPI";

export default class ZipcodeCalculatorMemory implements ZipcodeCalculatorAPI{
    public calculate(zipcodeOrigin: string, zipcodeDestination: string): number {
        const distance: number = 1000;
        return distance;
    }
}