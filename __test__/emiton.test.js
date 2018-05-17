const Emitry = require('../emitry.umd.js');

const emitry = new Emitry();

emitry.emit('a', 'should be a!');
emitry.emit('b', {b: 'this is b!'});
emitry.emit('c', ['js', 'css', 'html']);
emitry.emit('multi', 'js', 'css', 'html');

test('test function emitry.on()', () => {
  emitry.on('a', data => {
    expect(data).toBe('should be a!');
  });
  emitry.on('b', data => {
    expect(data).toEqual({b: 'this is b!'});
  });
  emitry.on('c', data => {
    expect(data).toEqual(['js', 'css', 'html']);
  });
});

test('test function emitry.on <Multi>', () => {
  emitry.on('multi', (value1, value2, value3) => {
    expect(value1).toBe('js');
    expect(value2).toBe('css');
    expect(value3).toBe('html');
  });
});

test('test function emitry.once()', () => {
  const mockFn = jest.fn();

  emitry.emit('once', 'this will be only emit once!');
  emitry.once('once', mockFn);
  emitry.on('once', mockFn);

  expect(mockFn.mock.calls.length).toBe(1);
});

test('test function emitry.off<Array>', () => {
  const mockFn = jest.fn();

  emitry.off(['a', 'b']);
  emitry.on('a', mockFn);
  emitry.on('b', mockFn);
  emitry.on('c', mockFn);

  expect(mockFn.mock.calls.length).toBe(1);
});

test('test function emitry.off<All>', () => {
  const mockFn = jest.fn();

  emitry.off();
  emitry.on('a', mockFn);
  emitry.on('b', mockFn);
  emitry.on('c', mockFn);
  emitry.on('multi', mockFn);

  expect(mockFn.mock.calls.length).toBe(0);
});
