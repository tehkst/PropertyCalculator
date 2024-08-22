<?php
// Validate input
if (empty($_POST['principal'])) {
  header('Location: index.php?error=Principal is required');
  exit();
}

// Perform calculations
$principal = $_POST['principal'];
// ... (add other input variables and calculations)

// Calculate mortgage payment
$interestRate = 0.05; // Example interest rate
$loanTerm = 30; // Example loan term in years
$monthlyInterestRate = $interestRate / 12;
$numberOfPayments = $loanTerm * 12;
$monthlyPayment = $principal * $monthlyInterestRate * pow(1 + $monthlyInterestRate, $numberOfPayments) / (pow(1 + $monthlyInterestRate, $numberOfPayments) - 1);

// Display results or redirect
echo "Monthly Payment: $" . number_format($monthlyPayment, 2);
// ... (display other results)
?>
