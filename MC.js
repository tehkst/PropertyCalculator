function calculate() {
    const price = document.getElementById('price').value;
    const repair = document.getElementById('repair').value;
    const holding = document.getElementById('holding').value;
    const selling = document.getElementById('selling').value;
    const arv = document.getElementById('arv').value;
    const resultDiv = document.getElementById('result');

    if (price && repair && holding && selling && arv) {
        const totalCosts = parseFloat(price) + parseFloat(repair) + parseFloat(holding) + parseFloat(selling);
        const netProfit = parseFloat(arv) - totalCosts;
        resultDiv.innerHTML = `Total Costs: $${totalCosts.toFixed(2)}<br>Net Profit: $${netProfit.toFixed(2)}`;
    } else {
        resultDiv.innerHTML = 'Please enter all the required values.';
    }
}
