const operatorErrorTemplateStrings = {
  deepStrictEqual: "Expected values to be strictly deep-equal: %s",
  strictEqual: "Expected values to be strictly equal: %s",
  strictEqualObject:
    'Expected "actual" to be reference-equal to "expected": %s',
  deepEqual: "Expected values to be loosely deep-equal: %s",
  equal: "Expected values to be loosely equal: %s",
  notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to: %s',
  notStrictEqual: 'Expected "actual" to be strictly unequal to: %s',
  notStrictEqualObject:
    'Expected "actual" not to be reference-equal to "expected": %s',
  notDeepEqual: 'Expected "actual" not to be loosely deep-equal to: %s',
  notEqual: 'Expected "actual" to be loosely unequal to: %s',
  notIdentical: "Values identical but not reference-equal: %s",
};

class AssertionError extends Error {
  constructor(options) {
    const { message, operator, stackStartFn, actual, expected } = options;
    super(message);
  }

  toString() {
    return ``;
  }
}

module.exports = AssertionError;
