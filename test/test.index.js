const cuid2 = require('./src/index');

test('createId() generates a string', () => {
  expect(typeof cuid2.createId()).toBe('string');
});

test('createId() generates a string of default length', () => {
  expect(cuid2.createId().length).toBe(cuid2.getConstants().defaultLength);
});

test('createId() generates a unique ID', () => {
  const ids = new Set();
  for (let i = 0; i < 1000; i++) {
    ids.add(cuid2.createId());
  }
  expect(ids.size).toBe(1000);
});

test('isCuid() returns true for a valid CUID', () => {
  expect(cuid2.isCuid(cuid2.createId())).toBe(true);
});

test('isCuid() returns false for an invalid string', () => {
  expect(cuid2.isCuid('invalid')).toBe(false);
});

test('createCounter() returns a function that increments', () => {
  const counter = cuid2.createCounter(5);
  expect(counter()).toBe(5);
  expect(counter()).toBe(6);
  expect(counter()).toBe(7);
});

test('bufToBigInt() converts a buffer to a bigint', () => {
  expect(typeof cuid2.bufToBigInt(Buffer.from([1, 2, 3]))).toBe('bigint');
});

test('createFingerprint() generates a string', () => {
  expect(typeof cuid2.createFingerprint()).toBe('string');
});
