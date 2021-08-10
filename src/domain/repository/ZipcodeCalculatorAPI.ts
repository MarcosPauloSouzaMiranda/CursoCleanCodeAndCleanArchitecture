export default interface ZipcodeCalculatorAPI{
    calculate(zipcodeOrigin: string, zipcodeDestination: string): number;
}