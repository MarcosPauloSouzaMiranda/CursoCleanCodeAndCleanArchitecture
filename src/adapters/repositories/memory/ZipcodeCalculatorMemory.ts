import ZipcodeCalculatorAPI from "../../../domain/repository/ZipcodeCalculatorAPI";

export default class ZipcodeCalculatorMemory implements ZipcodeCalculatorAPI{
    public calculate(zipcodeOrigin: string, zipcodeDestination: string): number {
        const distance: number = 1000;
        return distance;
    }
}