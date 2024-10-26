document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the expense name and amount
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    // Validate inputs
    if (name === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
    }

    // Add the expense to the list
    const expenseList = document.getElementById('expenses');
    const listItem = document.createElement('li');
    listItem.textContent = `${name}: $${amount.toFixed(2)}`;
    expenseList.appendChild(listItem);

    // Update the total expense
    const totalAmountElement = document.getElementById('total-amount');
    const currentTotal = parseFloat(totalAmountElement.textContent.replace('$', ''));
    const newTotal = currentTotal + amount;
    totalAmountElement.textContent = `$${newTotal.toFixed(2)}`;

    // Clear the form inputs
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
});
