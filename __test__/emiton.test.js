const Emitry = require('../lib/emitry.umd.js');

const emitry = new Emitry();

test('test function emitry.on()', () => {
  emitry.on('a', value => {
    expect(value).toEqual({a: 'this is a!'});
  });
  emitry.emit('a', {a: 'this is a!'});
});

test('test function emitry.on <Multi>', () => {
  emitry.on('multi', (value1, value2, value3) => {
    expect(value1).toBe('html');
    expect(value2).toBe('css');
    expect(value3).toBe('js');
  });

  emitry.emit('multi', 'html', 'css', 'js');
});

test('test function emitry.once()', () => {
  const mockFn = jest.fn();

  emitry.once('once', mockFn);

  emitry.emit('once', mockFn);
  emitry.emit('once', mockFn);

  expect(mockFn.mock.calls.length).toBe(1);
});

test('test function emitry.off<Array>', () => {
  const mockFn = jest.fn();

  emitry.on('x', mockFn);
  emitry.on('y', mockFn);

  emitry.off(['x', 'y']);

  emitry.emit('x', mockFn);
  emitry.emit('y', mockFn);

  expect(mockFn.mock.calls.length).toBe(0);
});

test('test function emitry.off<All>', () => {
  const mockFn = jest.fn();

  emitry.off();

  emitry.emit('multi', mockFn);

  expect(mockFn.mock.calls.length).toBe(0);
});
