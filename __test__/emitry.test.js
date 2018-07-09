const Emitry = require('../lib/emitry.umd.js');

test('test function emitry.on()', () => {
  const emitry = new Emitry();
  emitry.on('a', value => {
    expect(value).toEqual({a: 'this is a!'});
  });
  emitry.emit('a', {a: 'this is a!'});
  emitry.off();
});

test('test function emitry.on(...array)', () => {
  const emitry = new Emitry();
  emitry.on('multi', (value1, value2, value3) => {
    expect(value1).toBe('html');
    expect(value2).toBe('css');
    expect(value3).toBe('js');
  });

  emitry.emit('multi', 'html', 'css', 'js');
  emitry.off();
});

test('test function emitry.once()', () => {
  const emitry = new Emitry();
  const mockFn = jest.fn();
  const mockFn2 = jest.fn();

  emitry.on('once', mockFn)
  emitry.once('once', mockFn2);

  emitry.emit('once', 'aaa');
  emitry.emit('once', 'aaa');

  expect(mockFn.mock.calls.length).toBe(2);
  expect(mockFn2.mock.calls.length).toBe(1);
  emitry.off();
});

test('test function emitry.off<Array>', () => {
  const emitry = new Emitry();
  const mockFn = jest.fn();

  emitry.on('x', mockFn);
  emitry.on('y', mockFn);

  emitry.off(['x', 'y']);

  emitry.emit('x', 'hahaha');
  emitry.emit('y', 'hahaha');

  expect(mockFn.mock.calls.length).toBe(0);
});

test('test function emitry.off<All>', () => {
  const emitry = new Emitry();
  const mockFn = jest.fn();

  emitry.on('x', mockFn);
  emitry.on('y', mockFn);

  emitry.off();

  emitry.emit('x', 'hahaha');
  emitry.emit('y', 'hahaha');

  expect(mockFn.mock.calls.length).toBe(0);
});

test('test complex scene', () => {
  const emitry = new Emitry();
  const mockFn = jest.fn();

  emitry.on('x', mockFn);
  emitry.once('x', mockFn);
  emitry.once('x', mockFn);
  emitry.on('x', mockFn);

  emitry.emit('x', 'hahaha');
  emitry.emit('x', 'hahaha');

  expect(mockFn.mock.calls.length).toBe(6);
});
