const stringLength = require('./stringLength');

test('Characters count', () => {
    expect(stringLength('hola')).toBe(4);
});

test('Empty string', () => {
    expect(stringLength('')).toBe('Size error');
});

test('Big string', () => {
    expect(stringLength('asdfghjklqs')).toBe('Size error');
});

