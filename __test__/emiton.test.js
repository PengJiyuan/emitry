const Emiton = require('../emiton.umd.js');

const emiton = new Emiton();

emiton.emit('a', 'should be a!');
emiton.emit('b', {b: 'this is b!'});
emiton.emit('c', ['js', 'css', 'html']);
emiton.emit('multi', 'js', 'css', 'html');

test('test function emiton.on()', () => {
  emiton.on('a', data => {
    expect(data).toBe('should be a!');
  });
  emiton.on('b', data => {
    expect(data).toEqual({b: 'this is b!'});
  });
  emiton.on('c', data => {
    expect(data).toEqual(['js', 'css', 'html']);
  });
});

test('test function emiton.on <Multi>', () => {
  emiton.on('multi', (value1, value2, value3) => {
    expect(value1).toBe('js');
    expect(value2).toBe('css');
    expect(value3).toBe('html');
  });
});

test('test function emiton.once()', () => {
  const mockFn = jest.fn();

  emiton.emit('once', 'this will be only emit once!');
  emiton.once('once', mockFn);
  emiton.on('once', mockFn);

  expect(mockFn.mock.calls.length).toBe(1);
});

test('test function emiton.off<Array>', () => {
  const mockFn = jest.fn();

  emiton.off(['a', 'b']);
  emiton.on('a', mockFn);
  emiton.on('b', mockFn);
  emiton.on('c', mockFn);

  expect(mockFn.mock.calls.length).toBe(1);
});

test('test function emiton.off<All>', () => {
  const mockFn = jest.fn();

  emiton.off();
  emiton.on('a', mockFn);
  emiton.on('b', mockFn);
  emiton.on('c', mockFn);
  emiton.on('multi', mockFn);

  expect(mockFn.mock.calls.length).toBe(0);
});
