const reverseString = require('./reverseString');

test('Reversed string', () => {
    expect(reverseString('hola')).toBe('aloh');
});