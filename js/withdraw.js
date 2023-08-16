// step:1 get the button and add event listeners
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step:2  get new withdraw value by id
  const NewWithdrawAmount = getInputFieldvalueById("input-withdraw");
   //check validations for input
   if(isNaN(NewWithdrawAmount)){
    alert("please provide a number of amount");
    return;
 }
  // step:3 get new previous withdraw value by id
  const previousWithdrawAmount = getElementVlaueById("total-withdraw");
      // setp3:total withdraw value caculate

      //    step5:get privoues total balance by id using function
  const privousTotalBalance = getElementVlaueById("total-balance");
    //  Check validaton 
if(NewWithdrawAmount>privousTotalBalance){
  alert(" This accout has not enough balance ");
  return;
}

      const newTotalWithdrawAmount = previousWithdrawAmount + NewWithdrawAmount;
  //step4: set total withdraw amount
  setElementVlaueById("total-withdraw", newTotalWithdrawAmount);

  
  // step3:total balance amount caculate
  const newBalanceAmount = privousTotalBalance - newTotalWithdrawAmount;

  // step7:set new total Balance
  setElementVlaueById("total-balance", newBalanceAmount);

  
});
