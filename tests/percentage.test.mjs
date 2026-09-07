import test from 'node:test';
import assert from 'node:assert/strict';
import { applyIncrease, calculateIncrease, findOriginal } from '../src/lib/percentage.mjs';

test('finds a normal percentage increase', () => {
  assert.deepEqual(calculateIncrease(80, 100), { original: 80, next: 100, difference: 20, percentage: 25, multiplier: 1.25 });
});

test('reports a decrease when the new value is lower', () => {
  assert.equal(calculateIncrease(200, 150).percentage, -25);
});

test('handles unchanged and decimal values', () => {
  assert.equal(calculateIncrease(49.5, 49.5).percentage, 0);
  assert.ok(Math.abs(calculateIncrease(2.5, 3.1).percentage - 24) < 1e-10);
});

test('rejects a zero or negative baseline', () => {
  assert.throws(() => calculateIncrease(0, 10), /greater than zero/);
  assert.throws(() => calculateIncrease(-10, 5), /greater than zero/);
});

test('applies a percentage increase', () => {
  assert.deepEqual(applyIncrease(500, 12), { original: 500, next: 560, difference: 60, percentage: 12, multiplier: 1.12 });
});

test('supports a zero percent increase and rejects a negative rate', () => {
  assert.equal(applyIncrease(35, 0).next, 35);
  assert.throws(() => applyIncrease(35, -5), /zero percent or more/);
});

test('finds the original value', () => {
  assert.ok(Math.abs(findOriginal(115, 15).original - 100) < 1e-10);
  assert.throws(() => findOriginal(0, 15), /greater than zero/);
});

test('handles large values and rejects invalid input', () => {
  assert.equal(calculateIncrease(1_000_000_000, 1_250_000_000).percentage, 25);
  assert.throws(() => calculateIncrease(Number.NaN, 10), /valid numbers/);
});
