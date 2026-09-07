/** @param {number} value */
const cleanZero = (value) => (Object.is(value, -0) ? 0 : value);

/** @param {number} original @param {number} next */
export function calculateIncrease(original, next) {
  if (!Number.isFinite(original) || !Number.isFinite(next)) throw new Error('Enter valid numbers in both fields.');
  if (original <= 0) throw new Error('The original value must be greater than zero.');
  const difference = cleanZero(next - original);
  const percentage = cleanZero((difference / original) * 100);
  return { original, next, difference, percentage, multiplier: next / original };
}

/** @param {number} original @param {number} percentage */
export function applyIncrease(original, percentage) {
  if (!Number.isFinite(original) || !Number.isFinite(percentage)) throw new Error('Enter a valid starting value and percentage.');
  if (original <= 0) throw new Error('The starting value must be greater than zero.');
  if (percentage < 0) throw new Error('Enter an increase of zero percent or more.');
  const difference = original * (percentage / 100);
  const next = original + difference;
  return { original, next, difference, percentage, multiplier: 1 + percentage / 100 };
}

/** @param {number} next @param {number} percentage */
export function findOriginal(next, percentage) {
  if (!Number.isFinite(next) || !Number.isFinite(percentage)) throw new Error('Enter a valid new value and percentage.');
  if (next <= 0) throw new Error('The new value must be greater than zero in this mode.');
  if (percentage < 0) throw new Error('Enter an increase of zero percent or more.');
  const multiplier = 1 + percentage / 100;
  const original = next / multiplier;
  return { original, next, difference: next - original, percentage, multiplier };
}
