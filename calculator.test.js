const Calculator = require('./calculator')


describe('Test functionalities', () => {
    it('Sum functionality', () => {
        const calc = new Calculator()
        expect(calc.add(1, 2)).toBe(3);
    })

    it('Substract functionality', () => {
        const calc = new Calculator()
        expect(calc.substract(7, 24)).toBe(-17);
    })

    it('Multiply functionality', () => {
        const calc = new Calculator()
        expect(calc.multiply(8, 8)).toBe(64);
    })

    it('Divide functionality', () => {
        const calc = new Calculator()
        expect(calc.divide(27, 11)).toBe(2.4545454545454546);
    })
})