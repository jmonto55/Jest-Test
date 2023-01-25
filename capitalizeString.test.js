const capitalizeString = require('./capitalizeString');

it('First capital letter', () => {
    expect(capitalizeString('hello')).toBe('Hello');
})