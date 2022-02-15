
function getInputValue(inputId) {
    const InputField =  document.getElementById(inputId)
   const inputAmountText = InputField.value ;
   const amountValue = parseFloat(inputAmountText);
    //clear input field
   InputField.value = '';

   return amountValue;
}

function updateTotalField(totalFieldId, amount) {
   const totalElement =  document.getElementById(totalFieldId);
   const totalText = totalElement.innerText;
   const previousTotal = parseFloat(totalText);
   totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
   const balanceTotal = document.getElementById('balance-total');
   /* const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText); */

   if (isAdd == true) {
      balanceTotal.innerText = previousBalanceTotal + amount;
   }
   else{
      balanceTotal.innerText = previousBalanceTotal - amount;
   }
}
// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {

   const depositAmount = getInputValue('deposit-input');
   
   if (depositAmount > 0) {
   // get and update deposit total
   updateTotalField('deposit-total', depositAmount);

   // update balance
   updateBalance(depositAmount, true);

   }

   


  

});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {

   const withdrawAmount = getInputValue('withdraw-input');
   const currentBalance = getCurrentBalance();

   if (withdrawAmount > 0 && withdrawAmount < currentBalance) {

   // get and update withdraw total
   updateTotalField('withdraw-total', withdrawAmount);
   //update balance after the withdraw
   updateBalance(withdrawAmount, false);
   }
   if (withdrawAmount > currentBalance) {
      console.log('you can not withdraw more than current balance')
   }
   
   


});