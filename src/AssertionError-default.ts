import inspect from "@nodefill/util/inspect.js";

export = class AssertionError extends Error {
  name = "AssertionError";
  code = "ERR_ASSERTION";
  actual: any;
  expected: any;
  operator: string;
  generatedMessage: boolean;
  constructor(options: {
    message: string;
    actual: any;
    expected: any;
    operator: string;
    stackStartFn: Function;
  }) {
    const { message, actual, expected, operator, stackStartFn } = options;
    if (message) {
      super(message);
      this.generatedMessage = false;
    } else {
      const message =
        `${inspect(actual)} did not meet ${operator} against ` +
        `${inspect(expected)}`;
      super(message);
      this.generatedMessage = true;
    }

    this.actual = actual;
    this.expected = expected;
    this.operator = operator;

    Error.captureStackTrace?.(this, stackStartFn);
    this.stack;
  }
};
