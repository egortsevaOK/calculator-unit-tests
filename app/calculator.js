/**
 *
 *A simple class containing methods for addition and multiplication numbers
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {
  };

  /**
   *
   *
   * @param {...numbers} numbers to add
   * @return {Number} sum of numbers
   * @memberof Calculator
   */
  add(...numbers) {
    if (numbers.every((number) => typeof number === 'number')) {
      return numbers.reduce((previous, current) => previous + current);
    // eslint-disable-next-line linebreak-style
    } else {
      throw new Error(`All values should be a numbers`);
    }
  };
  /**
   *
   *
   *
   * @param {...numbers} numbers to multiply
   * @return {Number} multiplication of numbers
   * @memberof Calculator
   */
  multiply(...numbers) {
    if (numbers.every((number) => typeof number === 'number')) {
      return numbers.reduce((previous, current) => previous * current);
    } else {
      throw new Error(`All values should be a numbers`);
    }
  };
};

module.exports = Calculator;
