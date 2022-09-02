document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawtotalstring = withdrawTotalElement.innerText;
    const previouswithdrawtotal = parseFloat(previouswithdrawtotalstring);
    const currentwithdrawtotal = previouswithdrawtotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentwithdrawtotal;
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBalaceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalaceTotal;



})