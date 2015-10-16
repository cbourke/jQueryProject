
function computeTable() {
  var principle = 0;
  var apr       = 0;
  var terms     = 0;

  var monthlyPayment = getMonthlyPayment(principle, apr, terms);

  $("#monthlyPayment").val("$" + monthlyPayment).hide().fadeIn("slow");

  var balance = roundToCents(principle);

  //for the first terms - 1 payments, compute the monthly numbers:
  for(var month=1; month<terms; month++) {

    var monthInterest  = roundToCents(balance * (apr / 12));
    var monthPrinciple = roundToCents(monthlyPayment - monthInterest);
    balance = roundToCents(balance - monthPrinciple);

  }

  //handle the last month's payment separately
  var monthInterest  = roundToCents(balance * (apr / 12));
  var monthPrinciple = roundToCents(monthlyPayment - monthInterest);
  balance = 0;

}

function getMonthlyPayment(principle, apr, terms) {
  //TODO
}

function roundToCents(amount) {
    return Math.round(amount * 100) / 100;
}
