let balance = 0;
let doProcessing = true;

while (doProcessing) {
    const choice = prompt(
        `Current Balance: $${balance.toFixed(2)}\n` +
        "Choose an action:\n" +
        "1. Deposit\n" +
        "2. Withdraw\n" +
        "3. Check Balance\n" +
        "4. Exit"
    );
    if (choice === "1") {
        let deposit = parseFloat(prompt("Enter the amount that you want to deposit:"));
        if (isNaN(deposit) || deposit <= 0) {
            alert("Invalid amount. Please enter a positive number.");
        } else {
            balance += deposit;
            alert(`Amount has deposited successfully. $${deposit.toFixed(2)}.`);
        }

    } else if (choice === "2") {
        let withdraw = parseFloat(prompt("Enter the amount to withdraw:"));
        if (isNaN(withdraw) || withdraw <= 0) {
            alert("Invalid amount. Please enter a positive number.");
        } else if (withdraw > balance) {
            alert("Insufficient funds! Your balance is lower than the requested amount.");
        } else {
            balance -= withdraw;
            alert(`Amount has withdrawn successfully. $${withdraw.toFixed(2)}.`);
        }
    }

    else if (choice === "3") {
        alert(`Your current balance is: $${balance.toFixed(2)}`);

    }

    else if (choice === "4") {
        alert("Thank you for using the Services. Have a great day.");
        doProcessing = false;

    }

    else {
        alert("Invalid choice. Please select a number between 1 and 4.");
    }

}




