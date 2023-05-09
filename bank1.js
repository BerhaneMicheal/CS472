class Account {
    constructor(name, deposit) {
        this._name = name;
        this._balance = deposit;
    }

    deposit(amount) {
        this._balance += amount;
    }

    debit(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
        } else {
            console.error('Insufficient balance');
        }
    }

    info() {
        return `Account name: ${this._name}  Balance:$${this._balance}`;
    }
}

Account.accountInfoList = [];

document.getElementById('CreateNewAccountButton').addEventListener('click', function() {
    let name = document.getElementById('name').value;
    let deposit = parseFloat(document.getElementById('deposit').value);
    let account = new Account(name, deposit);
    Account.accountInfoList.push(account);
    updateOutput();
});

document.getElementById('depositButton').addEventListener('click', function() {
    // Note: This is a very simplistic implementation. You will need to create a dropdown and select account from there in a real scenario.
    let amount = parseFloat(prompt("Enter amount to deposit:"));
    Account.accountInfoList[0].deposit(amount); // Assuming we are depositing into the first account for this example
    updateOutput();
});

document.getElementById('debittaskButton').addEventListener('click', function() {
    // Note: This is a very simplistic implementation. You will need to create a dropdown and select account from there in a real scenario.
    let amount = parseFloat(prompt("Enter amount to debit:"));
    Account.accountInfoList[0].debit(amount); // Assuming we are debiting from the first account for this example
    updateOutput();
});

function updateOutput() {
    let output = document.getElementById('taskList');
    output.value = Account.accountInfoList.map(account => account.info()).join('\n');
}
