document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);

    // Calculate tax due
    const taxDue = (income * (taxRate / 100)).toFixed(2);

    // Display result in Rupees
    document.getElementById('result').innerHTML = `Tax Due for ${name}: ₹${taxDue}`;
});