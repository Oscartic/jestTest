const calculator = require('./calculator');

const num1 = 2;
const num2 = 1;

describe('Calculator: addition', () => {
    it('should add two numbers', () => {
        const additionOperation = calculator.addition(num1, num2);
        expect(additionOperation).toBe(num1 + num2);
    })
});

describe('Calculator: subtraction', () => {
    it('should subtract two numbers', () => {
        const subtractOperation = calculator.subtraction(num1, num2);
        expect(subtractOperation).toBe(num1 - num2);
    })
});

describe('Calculator: multiplication', () => {
    it('should add two numbers', () => {
        const multiplicationOperation = calculator.multiplication(num1, num2);
        expect(multiplicationOperation).toBe(num1 * num2);
    })
});

describe('Calculator: division', () => {
    it('should add two numbers', () => {
        const divisionOperation = calculator.division(num1, num2);
        expect(divisionOperation).toBe(num1 / num2);
    })
});