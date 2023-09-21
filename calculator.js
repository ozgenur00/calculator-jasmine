window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 100000, years: 30, rate: 4.5};
  const amount = document.getElementById("loan-amount");
  amount.value = values.amount;
  const loanYears = document.getElementById("loan-years");
  loanYears.value = values.years;
  const interestRate = document.getElementById("loan-rate");
  interestRate.value = values.rate;
  update();
}

// Get the current values from the UIs
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const rateMonthly = (values.rate / 100) / 12;
  const n = values.years * 12;
  const numerator = rateMonthly * values.amount;
  const denominator = 1 - Math.pow((1 + rateMonthly), -n);
  const monthlyPayment = numerator / denominator;
  return monthlyPayment.toFixed(2);  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPay = document.getElementById("monthly-payment");
  monthlyPay.innerText = `$ ${monthly}`;
}
