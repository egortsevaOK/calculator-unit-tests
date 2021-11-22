const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`Calculator addition scenarios`, function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });
  afterEach(function() {
    calculator = null;
  });
  it(`should return the sum of two positive numbers`, function() {
    expect(calculator.add(10, 20)).to.be.equal(30);
  });
  it(`should return the sum of three negative numbers`, function() {
    expect(calculator.add(-5, -5, -5)).to.be.equal(-15);
  });
  // eslint-disable-next-line max-len
  it(`should return the sum of one positive and one negative number`, function() {
    expect(calculator.add(-7, 9)).to.be.equal(2);
  });
  it(`should return the sum of five positive numbers`, function() {
    expect(calculator.add(1, 2, 3, 4, 5)).to.be.equal(15);
  });
  it(`should return the value of number when provided only one number`, function() {
    expect(calculator.add(100)).to.be.equal(100);
  });
  it(`should throw an error if one of arguments is not a number`, function() {
    // eslint-disable-next-line max-len
    expect(calculator.add.bind(calculator, 'string', 3)).to.throw(Error, 'All values should be a numbers');
  });
});

describe(`Calculator multiplication  scenarios`, function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });
  afterEach(function() {
    calculator = null;
  });
  it(`should return the result of multiplication of two positive numbers`, function() {
    expect(calculator.multiply(6, 8)).to.be.equal(48);
  });
  it(`should return the result of multiplication of ten positive numbers`, function() {
    expect(calculator.multiply(2, 2, 2, 2, 2, 2, 2, 2, 2, 2)).to.be.equal(1024);
  });
  it(`should return the result of multiplication of two negative numbers`, function() {
    expect(calculator.multiply(-6, -6)).to.be.equal(36);
  });
  // eslint-disable-next-line max-len
  it(`should return the result of multiplication of one positive and one negative number`, function() {
    expect(calculator.multiply(-7, 5)).to.be.equal(-35);
  });
  it(`should return the result of multiplying by zero`, function() {
    expect(calculator.multiply(6, 0)).to.be.equal(0);
  });
  it(`should throw an error if one of arguments is not a number`, function() {
    // eslint-disable-next-line max-len
    expect(calculator.multiply.bind(calculator, 'string', true)).to.throw(Error, 'All values should be a numbers');
  });
});

