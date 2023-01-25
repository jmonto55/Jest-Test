const stringLength= require('./index');

test('test1', () => {
    expect(stringLength('hola')).toBe(4);
});