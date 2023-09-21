
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 100000, years: 30, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual("506.69");
});

//I don't know why I can't fixed to 507
it("should return a result with 2 decimal places", function() {
  const values = {amount: 100062, years: 30, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual("507.00");
});

it('should calculate very low interest rates', function() {
  const values = {amount: 100000, years: 10, rate: 0.1};
  expect(calculateMonthlyPayment(values)).toEqual("837.54");
});

it('should calculate very high interest rates', function() {
  const values = {amount: 100000, years: 2, rate: 18.9};
  expect(calculateMonthlyPayment(values)).toEqual("5036.00");
});

it('should turn NaN if all 0', function() {
  const values = {amount: 0, years: 0, rate: 0};
  expect(calculateMonthlyPayment(values)).toEqual("NaN");
});