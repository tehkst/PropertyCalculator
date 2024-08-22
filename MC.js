function calculateMortgage() {
  const principal = parseFloat(document.getElementById("principal").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value) / 1200;
  const loanTerm = parseInt(document.getElementById("loanTerm").value) * 12;

  const monthlyPayment = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

  document.getElementById("monthlyPayment").value = monthlyPayment.toFixed(2);
  // ... (calculate remaining balance, amortization schedule, etc.)
}
